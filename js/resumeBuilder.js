/*
This is empty on purpose! Your code to build the resume will go here.
 */
String.prototype.replaceData = function(str) {
	return this.replace('%data%', str);
};

String.prototype.ucFirst = function(str) {
	return this[0].toUpperCase() + this.substr(1);
}; 

var bio = {
  name: "Nando Sangenetto",
  role: "Software Engineer",
  contacts: {
    mobile: "+55 21 972178264",
    email: "nandosangenetto@gmail.com",
    github: "sangenetto",
    twitter: "nandosang",
    location: "Tijuca, Rio de Janeiro",
  },
  welcomeMessage: "Let's do it.",
  skills: ["HTML", "CSS", "JavaScript", "PHP"],
  biopic: "https://pbs.twimg.com/profile_images/646896039266504705/U1LfAYlR_400x400.jpg",
  url: "http://facebook.com/sangenetto",
  display: function() {
    var headerSection = '';
    headerSection += HTMLheaderName.replaceData(this.name);
    headerSection += HTMLheaderRole.replaceData(this.role);
    $('#header').prepend(headerSection);

    var contactsSection = '';
    $.each(this.contacts, function(property, value) {
      if (value.length) {
        contactsSection += HTMLcontactGeneric.replace('%contact%', property.ucFirst()).replaceData(value);
      }
    });
    $('#topContacts, #footerContacts').html(contactsSection);

    var bioSection = '';
    bioSection += HTMLbioPic.replaceData(this.biopic);
    bioSection += HTMLwelcomeMsg.replaceData(this.welcomeMessage);
    $('#header').append(bioSection);

    var skillsSection = '';
    skillsSection += HTMLskillsStart;
    $('#header').append(skillsSection);

    var skillsList = '';
    $.each(this.skills, function(property, value) {
      skillsList += HTMLskills.replaceData(value);
    });
    $('#skills').html(skillsList);
  }
};

var work = {
  jobs: [{
    employer: "Paramaker",
    title: "Developer",
    location: "Ladeira do Russel, Glória, Rio de Janeiro",
    dates: '01-03-2011',
    description: "Work as lead developer at Paramaker"
  }, {
    employer: "Webedia Brasil",
    title: "Software Engineer",
    location: "Rua Assunção, Botafogo, Rio de Janeiro",
    dates: '01-02-2016',
    description: "Work as lead software engineer at Webedia, working with brand projects"
  }],
  display: function() {
    $.each(this.jobs, function(index, value) {
      $('#workExperience').append(HTMLworkStart);
      var entryHtml = '';
      entryHtml += HTMLworkEmployer.replaceData(this.employer);
      entryHtml += HTMLworkTitle.replaceData(this.title);
      entryHtml += HTMLworkDates.replaceData(this.dates);
      entryHtml += HTMLworkLocation.replaceData(this.location);
      entryHtml += HTMLworkDescription.replaceData(this.description);
      $('.work-entry:last-child').append(entryHtml);
    });
  }
};

var projects = {
  projects: [{
    title: "Sempre Pronta",
    dates: "2016",
    description: "Sempre Pronta website for Garnier (L'oreal)",
    images: ["http://shreetapasya.com/wp-content/uploads/2013/07/WebSite_Snapshots.jpg?124817", "http://typeimage.com/admin/resources/tn-climastor-site.jpg"]
  }],
  display: function() {
  	$.each(this.projects, function(index, value) {
      $('#projects').append(HTMLprojectStart);
      var entryHtml = '';
      entryHtml += HTMLprojectTitle.replaceData(this.title);
      entryHtml += HTMLprojectDates.replaceData(this.dates);
      entryHtml += HTMLprojectDescription.replaceData(this.description);
      $.each(this.images, function(index, value) {
      	entryHtml += HTMLprojectImage.replaceData(value);
      });
      $('.project-entry:last-child').append(entryHtml);
    });
  }
};

var education = {
  schools: [{
    name: "Instituto INFNET",
    location: "Rua São José, Centro, Rio de Janeiro",
    degree: "BA",
    majors: ["Software Engineering"],
    dates: "2015",
    url: "http://infnet.edu.br"
  }],
  onlineCourses: [{
    title: "Front-end Web Developer Nanodegree",
    school: "Udacity",
    dates: "2016",
    url: "https://udacity.com/course/front-end-web-developer-nanodegree--nd001/"
  }],
  display: function() {
  	$.each(this.schools, function(index, value) {
      $('#education').append(HTMLschoolStart);
      var entryHtml = '';
      entryHtml += HTMLschoolName.replaceData(this.name);
      entryHtml += HTMLschoolDegree.replaceData(this.degree);
      entryHtml += HTMLschoolDates.replaceData(this.dates);
      entryHtml += HTMLschoolLocation.replaceData(this.location);
      entryHtml += HTMLschoolMajor.replaceData(this.majors.concat());
      $('.education-entry:last-child').append(entryHtml);
    });

  	$('#education').append(HTMLonlineClasses);
  	$.each(this.onlineCourses, function(index, value) {
      $('#education').append(HTMLschoolStart);
      var entryHtml = '';
      entryHtml += HTMLonlineTitle.replaceData(this.title);
      entryHtml += HTMLonlineSchool.replaceData(this.school);
      entryHtml += HTMLonlineDates.replaceData(this.dates);
      entryHtml += HTMLonlineURL.replaceData(this.url);
      $('.education-entry:last-child').append(entryHtml);
    });

  }
};

$(function () {
	$('#mapDiv').append(googleMap);

	bio.display();
	work.display();
	education.display();
	projects.display();
});
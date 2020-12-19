$(document).ready(function() {
      const projects = [
            {
                  name: "Code Generator",
                  href: "https://specilaist.github.io/generatePassword/",
                  src: "./Assets/password.png",
                  alt: "Picture of random numbers",
            },
            {
                  name: "Weather APP",
                  href: "https://specilaist.github.io/weatherApp/",
                  src: "./Assets/weather.png",
                  alt: "Multiple weather types",
            },
            {
                  name: "Lyric Jam",
                  href: "https://specilaist.github.io/Lyric-Jam/",
                  src: "./Assets/music.jpg",
                  alt: "Purple music note",
            },
            {
                  name: "Day Planner",
                  href: "https://specilaist.github.io/dayPlanner/",
                  src: "./Assets/calendar.jpg",
                  alt: "Calendar turning",
            },
            {
                  name: "Test Quiz",
                  href: "https://specilaist.github.io/Test-Quiz/",
                  src: "./Assets/quiz.webp",
                  alt: "Emojis questioning and with glasses",
            },
            {
                  name: "Employee Summary",
                  href: "https://github.com/specilaist/Employee-Summary/tree/master/Develop",
                  src: "./Assets/employees.png",
                  alt: "Employee Grid",
            },
            {
                  name: "Smedium",
                  href: "https://guarded-scrubland-12802.herokuapp.com/",
                  src: "./Assets/blog.jpeg",
                  alt: "Social Media App",
            },
            {
                  name: "Generate ReadMe",
                  href: "https://github.com/specilaist/generateReadMe",
                  src: "./Assets/ReadMe.png",
                  alt: "ReadMe File",
            },
            {
                  name: "Note Taker",
                  href: "https://ebansnotes.herokuapp.com/",
                  src: "./Assets/note.jpeg",
                  alt: "Note Book",
            }
      ];

      console.log(projects);

      let generate = function () {
            $.each(projects, function(_index, items) {
                  // if (index % 2 === 0) {
                  //       row = $('<div>');
                  //       row.addClass('row');
                  // }
                  console.log(items);
                  console.log(items);
                  const project = $('<figure>');
                  project.addClass('projects col-md-5 col-sm-12 d-inline-block m-2');

                  const banner = $('<div>');
                  banner.addClass('banner');


                  const projectImage = $('<img>');
                  projectImage.addClass('image');
                  projectImage.attr('src', items.src);
                  projectImage.attr('alt', items.alt);

                  const projectTag = $('<a>');
                  projectTag.attr('target', '_blank');
                  projectTag.attr('href', items.href);
                  projectTag.text(items.name);

                  banner.append(projectTag);
                  project.append(projectImage, banner);
                  $('#generateContainer').append(project);
            });


      };

      $(document).on('click', '.submit', function(){
            console.log('you hit the on function')
            const $submitted = $('<h3>');
            $submitted.addClass('sumbitted');
            $submitted.text('Thank You For Submitting');
            $('#contactHeader').append($submitted)
      });

      generate();
});
window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const optionaTemplate = Handlebars.compile($('#optiona-template').html());

  const router = new Router({
    mode: 'history',
    page404: path => {
      const html = errorTemplate({
        color: "yellow",
        title: "error",
        message: "no no no",
      });
      el.html(html);
    },
  });


  router.add('/', () => {
    let html = optionaTemplate();
    el.html(html);
  });

// Navigate app to current url
router.navigateTo(window.location.pathname);

$('a').on('click', (event) => {
  // Block browser page load
  event.preventDefault();

  // Navigate to clicked url
  const href = target.attr('href');
  const path = href.substr(href.lastIndexOf('/'));
  router.navigateTo(path);
});
});

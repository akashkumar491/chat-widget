(function () {
  const propertyId = window.ChatWidgetSettings?.propertyId || 'default-property';
  
  const container = document.createElement('div');
  container.id = 'chat-widget-root';
  document.body.appendChild(container);

  const script = document.createElement('script');
  script.src = `https://chat-widget-ashen.vercel.app/widget-app.js?propertyId=${propertyId}`;
  script.type = 'module';
  script.async = true;

  document.head.appendChild(script);
})();

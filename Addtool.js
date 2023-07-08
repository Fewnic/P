function insertHTML() {
  var htmlCode = `
 <script>
        window.addEventListener('load', function() {
          var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
          document.getElementById('loadTime').textContent = 'Page Load Time: ' + loadTime + 'm/s';
        });
      </script>
  `;

  document.write(htmlCode);
}

insertHTML();

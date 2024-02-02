$(document).ready(function () {
    $('.servicio-item').each(function () {
      var imageSrc = $(this).find('img').attr('src');
      var $button = $(this).find('p');

      getAverageColor(imageSrc, function (color) {
        $button.css('background-color', color);
      });

      $button.hover(function () {
        $button.css('background-color', 'rgba(255, 255, 255, 0.8)');
        $button.css('color', '#000');
      }, function () {
        $button.css('background-color', $button.data('original-color'));
        $button.css('color', '#fff');
      });
    });

    function getAverageColor(imageSrc, callback) {
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageSrc;

      img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var data = ctx.getImageData(0, 0, img.width, img.height).data;
        var r = 0;
        var g = 0;
        var b = 0;

        for (var i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }

        r = Math.floor(r / (data.length / 4));
        g = Math.floor(g / (data.length / 4));
        b = Math.floor(b / (data.length / 4));

        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
        callback(color);
      };
    }
  });
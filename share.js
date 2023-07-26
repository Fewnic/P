
function insertHTML() {
  var htmlCode = `
    <div class="share-btn" onclick="toggleShareOptions()">+</div>
  <div class="share-options"id="options-container">
<div class="share-option" onclick="copyLink()">Copy Link</div>
    <div class="share-option" onclick="shareOnFacebook()">Facebook</div>
<div class="share-option" onclick="shareOnWhatsApp()">WhatsApp</div>
<div class="share-option" onclick="shareOnTelegram()">Telegram</div>
    <div class="share-option" onclick="shareOnTwitter()">Twitter</div>
    <div class="share-option" onclick="shareOnLinkedIn()">LinkedIn</div>
    
    <div class="share-option" onclick="shareOnBlogger()">Blogger</div>
    <div class="share-option" onclick="shareOnGoogleSites()">Google Sites</div>
    
    <div class="share-option" onclick="shareOnSMS()">SMS</div>
    <div class="share-option" onclick="shareOnPinterest()">Pinterest</div>
    <div class="share-option"onclick="shareOnTikTok()">TikTok</div>
  <div class="share-option"onclick="shareOnSnapchat()">Snapchat</div>
  <div class="share-option"onclick="shareOnReddit()">Reddit</div>

    
  </div>

  <script>
    function toggleShareOptions() {
      document.querySelector('.share-btn').classList.toggle('active');
      document.querySelector('.share-options').classList.toggle('active');
    }

    // Share functions as before...
    
    function shareOnFacebook() {
      window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href));
    }

    function shareOnTwitter() {
      window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href));
    }

    function shareOnLinkedIn() {
      window.open("https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(window.location.href));
    }

    function shareOnWhatsApp() {
      window.open("https://wa.me/?text=" + encodeURIComponent(window.location.href));
    }

    function shareOnBlogger() {
      window.open("https://www.blogger.com/blog-this.g?u=" + encodeURIComponent(window.location.href));
    }

    function shareOnGoogleSites() {
      window.open("https://sites.google.com/site/addtomysite/add-url?url=" + encodeURIComponent(window.location.href));
    }

    function shareOnTelegram() {
      window.open("https://telegram.me/share/url?url=" + encodeURIComponent(window.location.href));
    }

    function shareOnSMS() {
      window.open("sms:?body=" + encodeURIComponent(window.location.href));
    }

    function shareOnPinterest() {
      window.open("https://pinterest.com/pin/create/bookmarklet/?url=" + encodeURIComponent(window.location.href));
    }
function shareOnTikTok() {
      window.open("https://www.tiktok.com/sharing/share?m=web&t=0&u=" + encodeURIComponent(window.location.href));
    }

    function shareOnSnapchat() {
      window.open("https://www.snapchat.com/add/" + encodeURIComponent(window.location.href));
    }

    function shareOnReddit() {
      window.open("https://www.reddit.com/submit?url=" + encodeURIComponent(window.location.href));
    }
    function copyLink() {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      alert("Link copied to clipboard!");
    }
  </script>
<script>
        // JavaScript for automatic scrolling and highlighting
        window.addEventListener("DOMContentLoaded", function() {
            var optionsContainer = document.getElementById('options-container');
            var options = Array.from(optionsContainer.getElementsByClassName('share-option'));
            var scrollAmount = optionsContainer.offsetWidth / 2; // Adjust scroll speed (scrolls half of the container width)
            var highlightedIndex = 0;
            var highlightedOption;
            var touchTimeout;

            function highlightOption(index) {
                if (highlightedOption) {
                    highlightedOption.classList.remove('highlighted');
                }
                options[index].classList.add('highlighted');
                highlightedOption = options[index];
            }

            function scrollContainerToCenter() {
                var containerWidth = optionsContainer.offsetWidth;
                var scrollLeft = (highlightedOption.offsetLeft + highlightedOption.offsetWidth / 2) - containerWidth / 2;
                optionsContainer.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }

            function updateHighlightedOption() {
                highlightOption(highlightedIndex);
                scrollContainerToCenter();
                highlightedIndex = (highlightedIndex + 1) % options.length;
            }

            function handleTouchStart() {
                clearInterval(intervalId);
                clearTimeout(touchTimeout);
            }

            function handleTouchEnd() {
                touchTimeout = setTimeout(function() {
                    updateHighlightedOption();
                    intervalId = setInterval(updateHighlightedOption, 1000); // Resume animation after 3 seconds
                }, 3000); // Pause animation for 3 seconds
            }

            var intervalId = setInterval(updateHighlightedOption, 1000); // Adjust delay between highlighting (in milliseconds)

            updateHighlightedOption(); // Highlight initial option

            optionsContainer.addEventListener('touchstart', handleTouchStart);
            optionsContainer.addEventListener('touchend', handleTouchEnd);
        });
    </script>

<style>
   .share-options {
      
      display: none;
      border-radius: 40px;
      position: fixed;
            bottom: 0; right: 10px;
            width: 80%;z-index: 99;
            background-color: #f1f1f1;
            padding: 10px;
            overflow-x: scroll;
            white-space: nowrap;
            scroll-behavior: smooth;
    }

    .share-options.active {
      display: block;
    }

    .share-option {
      display: inline-block;
      margin-right: 10px;
      padding: 5px 10px;
      background-color: #eaeaea;
      border-radius: 5px;
      cursor: pointer;
    }

    .share-option:hover {
      background-color: #F5F5F5;
    }
     .highlighted {
              background-color: #071BFF59;
            }
            
            .share-btn {
      position: fixed;
      bottom: 0;z-index: 999;
     left: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #2196F3;
      color: white;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
      cursor: pointer;
      transition: all 0.3s ease-out;
    }

    .share-btn:hover {
      background-color: #0D47A1;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    
    
    
    #scrollIndicator {
        position: fixed;
        Bottom: 10px;
        Right: 50%;
        background-color: green;
        color: white;
        padding: 5px;
        border-radius: 50%;
        Z-index:9;
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
    
</style>


    <div id="scrollIndicator"></div>

    <script>
        window.addEventListener('scroll', function() {
            var scrollIndicator = document.getElementById("scrollIndicator");
            var scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
            scrollIndicator.textContent = scrollPercentage + "%";
        });
    </script>
  `;

  document.write(htmlCode);
}

insertHTML();

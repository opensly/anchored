(function(global) {
  const anchored = (function() {
    const urlRegex = /((?<!\+)https?:\/\/(?:www\.)?(?:[-\p{Letter}.]+?[.@][a-zA-Z\d]{2,}|localhost)(?:[-\w\p{Letter}.:%+~#*$!?&/=@]*?(?:,(?!\s))*?)*)/gu;

    // Check if the URL is truncated by ensuring it's not followed by a valid character.
    function isTruncated(part, nextPart) {
      const truncatedChars = ['.', ',', '!', '?', ';', ' ', '\n'];
      return truncatedChars.some(char => nextPart && nextPart.startsWith(char));
    }

    return function(text) {
      const fragment = document.createDocumentFragment();
      const parts = text.split(urlRegex);

      for (const [index, part] of parts.entries()) {
        if (index % 2 && !isTruncated(part, parts[index + 1])) {
          const linkElement = document.createElement('a');
          linkElement.href = part;
          linkElement.target = "_blank";
          linkElement.rel = "noopener noreferrer";
          linkElement.textContent = part;
          fragment.append(linkElement);
        } else if (part.length > 0) {
          fragment.append(part);
        }
      }

      return fragment;
    };
  })();

  // Expose the function for import/export usage
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = anchored;
  } else {
    global.anchored = anchored;
  }

})(typeof window !== 'undefined' ? window : global);

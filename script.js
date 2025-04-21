const resetButton = document.getElementById('reset');
const inputfield = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

inputfield.addEventListener('input', (event) => {
  let markdowntext = event.target.value;

  const html = marked.parse(markdowntext);
  markdowntext = html.replace(/\n/g, '<br>\n');
  // // Heading: h1 -> # text -> <h1>text</h1>
  // markdowntext = markdowntext.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

  // // Heading: h2 -> ## text -> <h2>text</h2>
  // markdowntext = markdowntext.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>');

  // // Horizontal Line -> --- -> <hr>
  // markdowntext = markdowntext.replace(/^---$/gm, '<hr>');

  // // Bold Text -> **text** -> <strong>text</strong>
  // markdowntext = markdowntext.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  preview.innerHTML = markdowntext;
  preview.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
});

resetButton.addEventListener('click', () => {
  (inputfield.value = ''),
    (preview.innerHTML =
      '<p class="placeholder">Preview will appear here...</p>');
  inputfield.focus();
});

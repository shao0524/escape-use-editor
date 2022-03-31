const defaultImgUrl =
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
const myTools = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ size: ["small", false, "large", "huge"] }],
  ["image"],
];

const options = {
  debug: "info",
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: {
      container: myTools,
      handlers: {
        image: imageHandler,
      },
    },
  },
  placeholder: "Compose an epic...",
  theme: "snow",
};

const editor = new Quill("#editor", options);

function imageHandler() {
  const input = document.createElement("input");
  input.type = "file";
  input.click();

  input.addEventListener("change", (e) => {
    const range = this.quill.getSelection();
    const { value } = e.target;
    if (value) {
      this.quill.insertEmbed(
        range.index,
        "image",
        defaultImgUrl,
        Quill.sources.USER
      );
    }
  });
}

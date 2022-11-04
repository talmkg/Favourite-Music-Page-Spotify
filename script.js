const RemoveRowButtons = document.querySelectorAll(
  '[data-action="remove-row"]'
);

for (const button of RemoveRowButtons) {
  button.addEventListener("click", function (e) {
    const target = e.currentTarget;
    const col = target.parentNode;
    const row = col.parentNode;

    row.remove();
  });
}

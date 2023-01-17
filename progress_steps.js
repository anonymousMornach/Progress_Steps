const progress_meter = document.querySelector(".progress_meter");
const prev_btn = document.querySelector(".prev_btn");
const next_btn = document.querySelector(".next_btn");
const progress_step = document.querySelectorAll(".progress_step");

let current_step = 1;

next_btn.addEventListener("click", () => {
  current_step++;

  if (current_step > progress_step.length) {
    current_step = progress_step.length;
  }

  update_step();
});
prev_btn.addEventListener("click", () => {
  current_step--;

  if (current_step < 1) {
    current_step = 1;
  }

  update_step();
});
function update_step() {
  progress_step.forEach((step, idx) => {
    if (idx < current_step) {
      step.classList.add("active_step");
    } else {
      step.classList.remove("active_step");
    }
  });

  const active_step = document.querySelectorAll(".active_step");

  progress_meter.style.width =
    ((active_step.length - 1) / (progress_step.length - 1)) * 100 + "%";
  if (current_step === 1) {
    prev_btn.disabled = true;
  } else if (active_step === progress_step.length) {
    next_btn.disable = true;
  } else {
    prev_btn.disabled = false;
    next_btn.disabled = false;
  }
}

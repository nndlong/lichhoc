function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

// Chatbot với phản hồi trễ
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const userMsg = input.value.trim();

  if (userMsg === "") return;

  appendMessage("🧑 Bạn", userMsg);
  input.value = "";

  appendMessage("🤖 Bot", "<i>Đang phản hồi...</i>", "temp");

  setTimeout(() => {
    document.querySelector(".temp")?.remove();

    let botMsg = "❓ Xin lỗi, tôi chưa được cập nhật thông tin này. Bạn có thể hỏi lại?";

    const lower = userMsg.toLowerCase();
    if (lower.includes("lịch")) {
      botMsg = "📅 Bạn muốn xem lịch học cơ bản hay nâng cao?";
    } else if (lower.includes("giảng viên")) {
      botMsg = "👨‍🏫 Giảng viên là Nguyễn Ngọc Duy Long - Lớp trưởng lớp SD1901.";
    } else if (lower.includes("gpa")) {
      botMsg = "📊 GPA của giảng viên là 3.66 / 4.00.";
    } else if (lower.includes("hi")) {
      botMsg = "Xin chào tôi là chatbot, tôi có thể hỗ trợ gì cho bạn?";
    } else if (lower.includes("hello")) {
      botMsg = "Xin chào tôi là chatbot, tôi có thể hỗ trợ gì cho bạn?";
    } else if (lower.includes("helo")) {
      botMsg = "Xin chào tôi là chatbot, tôi có thể hỗ trợ gì cho bạn?";
    } else if (lower.includes("chào")) {
      botMsg = "Xin chào tôi là chatbot, tôi có thể hỗ trợ gì cho bạn?";
    } else if (lower.includes("thêm lịch học")) {
      botMsg = "Nếu muốn thêm lịch có thể liên hệ cho Zalo: 0345.1207.08 hoặc Facebook: Duy Long - @nndlong";
    } else if (lower.includes("đổi lịch học")) {
      botMsg = "Nếu muốn đổi lịch có thể liên hệ cho Zalo: 0345.1207.08 hoặc Facebook: Duy Long - @nndlong";
    } else if (lower.includes("xóa lịch học")) {
      botMsg = "Nếu muốn xóa lịch có thể liên hệ cho Zalo: 0345.1207.08 hoặc Facebook: Duy Long - @nndlong";
    } 






    appendMessage("🤖 Bot", botMsg);
  }, 1500);
}

function appendMessage(sender, message, className = "") {
  const chatlog = document.getElementById("chatlog");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  if (className) msg.classList.add(className);
  msg.style.marginBottom = "8px";
  chatlog.appendChild(msg);
  chatlog.scrollTop = chatlog.scrollHeight;
}

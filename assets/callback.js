(() => {
  "use strict";
  const messages = {
  "Deutsch": {
    "lang": "de",
    "sending": "Wird gesendet …",
    "title": "Vielen Dank für Ihre Rückrufanfrage!",
    "body": "Ihre Anfrage wurde übermittelt. Wir melden uns bei Ihnen auf Deutsch.",
    "error": "Die Übermittlung konnte nicht bestätigt werden. Bitte kontaktieren Sie uns direkt telefonisch oder versuchen Sie es erneut."
  },
  "Russisch": {
    "lang": "ru",
    "sending": "Отправка…",
    "title": "Спасибо за ваш запрос!",
    "body": "Ваш запрос отправлен. Мы свяжемся с вами по телефону на русском языке.",
    "error": "Не удалось подтвердить отправку запроса. Пожалуйста, позвоните нам напрямую или попробуйте ещё раз."
  },
  "Rumänisch": {
    "lang": "ro",
    "sending": "Se trimite…",
    "title": "Îți mulțumim pentru solicitare!",
    "body": "Solicitarea ta a fost transmisă. Te vom suna în limba română.",
    "error": "Trimiterea solicitării nu a putut fi confirmată. Te rugăm să ne suni direct sau să încerci din nou."
  },
  "Griechisch": {
    "lang": "el",
    "sending": "Αποστολή…",
    "title": "Ευχαριστούμε για το αίτημά σας!",
    "body": "Το αίτημά σας υποβλήθηκε. Θα επικοινωνήσουμε μαζί σας τηλεφωνικά στα ελληνικά.",
    "error": "Δεν ήταν δυνατό να επιβεβαιωθεί η αποστολή του αιτήματός σας. Παρακαλούμε καλέστε μας απευθείας ή δοκιμάστε ξανά."
  }
};
  document.querySelectorAll(".callback-form").forEach((form) => {
    const status = form.querySelector(".callback-status");
    const confirmation = form.parentElement.querySelector(".callback-confirmation");
    const submit = form.querySelector('button[type="submit"]');
    const language = form.querySelector('[name="sprache"]');
    if (!status || !confirmation || !submit || !language || !window.fetch || !window.URLSearchParams) return;
    let pending = false;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (pending) return;
      if (!form.reportValidity()) return;
      const msg = messages[language.value];
      if (!msg) return;
      const data = new URLSearchParams(new FormData(form));
      const originalLabel = submit.textContent;
      pending = true;
      submit.disabled = true;
      form.setAttribute("aria-busy", "true");
      status.lang = msg.lang;
      status.hidden = false;
      status.classList.remove("callback-error");
      status.textContent = msg.sending;
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: data.toString()
        });
        if (!response.ok) throw new Error("Form submission not confirmed");
        confirmation.lang = msg.lang;
        confirmation.querySelector("h3").textContent = msg.title;
        confirmation.querySelector("p").textContent = msg.body;
        form.reset();
        form.hidden = true;
        confirmation.hidden = false;
        confirmation.focus();
      } catch {
        status.classList.add("callback-error");
        status.textContent = msg.error;
      } finally {
        pending = false;
        submit.disabled = false;
        submit.textContent = originalLabel;
        form.removeAttribute("aria-busy");
      }
    });
  });
})();

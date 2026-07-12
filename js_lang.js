const content = {
  ar: {
    logo: "م.ش",
    nav: {
      about: "من أنا",
      education: "التحصيل الدراسي",
      skills: "المهارات",
      experience: "الخبرات",
      contact: "التواصل"
    },
    hero: {
      name: "محمد شامل / Mohammed Shamil",
      tagline: "مطور ويب وتطبيقات موبايل / Web & Mobile Developer"
    },
    about: {
      title: "من أنا",
      text: "مطور شغوف بتطوير حلول تقنية مبتكرة في مجال الويب والموبايل. أسعى دائماً لتقديم تجارب رقمية عالية الجودة تجمع بين الأداء والجماليات."
    },
    education: {
      title: "التحصيل الدراسي",
      items: [
        {
          degree: "بكالوريوس / Bachelor's Degree",
          field: "علوم الحاسوب / Computer Science",
          institution: "جامعة المعارف / Al-Maarif University",
          status: "✅ Completed"
        },
        {
          degree: "دبلوم / Diploma",
          field: "تقنيات علوم الحاسوب / Computer Science Technologies",
          institution: "المعهد التقني الأنبار / Anbar Technical Institute",
          status: "✅ Completed"
        }
      ]
    },
    skills: {
      title: "مهاراتي",
      web: { title: "تطوير الويب" },
      mobile: { title: "تطوير الموبايل" },
      tools: { title: "أدوات أخرى" }
    },
    experience: {
      title: "الشهادات والخبرات",
      work: {
        title: "الخبرة",
        placeholder: "أضف تفاصيل الخبرة العملية: المسمى الوظيفي، الشركة، المدة، والمسؤوليات."
      },
      cert: {
        title: "الشهادات",
        placeholder: "أضف الشهادات: اسم الشهادة، الجهة المانحة، السنة."
      }
    },
    contact: {
      title: "تواصل معي",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        send: "إرسال"
      }
    }
  },
  en: {
    logo: "M.S",
    nav: {
      about: "About",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      name: "Mohammed Shamil",
      tagline: "Web & Mobile Developer"
    },
    about: {
      title: "About Me",
      text: "A passionate developer focused on building innovative web and mobile solutions. I strive to deliver high-quality digital experiences that combine performance and aesthetics."
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor's Degree",
          field: "Computer Science",
          institution: "Al-Maarif University",
          status: "✅ Completed"
        },
        {
          degree: "Diploma",
          field: "Computer Science Technologies",
          institution: "Anbar Technical Institute",
          status: "✅ Completed"
        }
      ]
    },
    skills: {
      title: "Skills",
      web: { title: "Web Development" },
      mobile: { title: "Mobile Development" },
      tools: { title: "Other Tools" }
    },
    experience: {
      title: "Certificates & Experience",
      work: {
        title: "Experience",
        placeholder: "Add work experience details: role, company, period, and responsibilities."
      },
      cert: {
        title: "Certificates",
        placeholder: "Add certificates: name, issuer, and year."
      }
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send"
      }
    }
  }
};

let currentLang = "ar";
const langToggle = document.getElementById("langToggle");

function getValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyLanguage(lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getValue(content[lang], key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getValue(content[lang], key);
    if (value) el.placeholder = value;
  });
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);
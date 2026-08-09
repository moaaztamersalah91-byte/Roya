/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/* =========================
   LANGUAGE SYSTEM
========================= */

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = localStorage.getItem("language") || "ar";


const translations = {

    ar: {

        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contact: "تواصل معنا",

        company: "شركة رؤية للمقاولات",

        heroTitle:
            "نبني اليوم...<br>لنصنع غدًا أفضل بإذن الله",

        heroDescription:
            "نقدم حلولًا متكاملة في مجال المقاولات والإنشاءات، مع الاهتمام بالجودة والدقة في كل مشروع.",

        exploreProjects: "استكشف مشاريعنا",

        contactUs: "تواصل معنا",

        aboutTitle:
            "نبني بثقة ونصنع فرقًا",

        aboutText1:
            "شركة رؤية هي شركة متخصصة في مجال المقاولات والإنشاءات، نعمل على تنفيذ المشاريع باهتمام كبير بالجودة والدقة والتفاصيل.",

        aboutText2:
            "نؤمن أن نجاح أي مشروع يبدأ بفهم احتياجات العميل، وينتهي بتقديم نتائج تلبي توقعاته وتحقق رؤيته.",

        aboutButton:
            "تعرف علينا أكثر",


        servicesTitle:
            "حلول متكاملة لمشاريعك",

        servicesDescription:
            "نقدم مجموعة من خدمات المقاولات والإنشاءات لتلبية احتياجات المشاريع المختلفة باحترافية واهتمام بأدق التفاصيل.",


        service1Title:
            "أعمال المقاولات",

        service1Text:
            "تنفيذ أعمال المقاولات والإنشاءات وفق متطلبات المشروع مع الاهتمام بالجودة والدقة.",


        service2Title:
            "أعمال البناء",

        service2Text:
            "تنفيذ مختلف أعمال البناء والإنشاء بداية من المراحل الأولى وحتى اكتمال المشروع.",


        service3Title:
            "التشطيبات",

        service3Text:
            "تنفيذ أعمال التشطيبات الداخلية والخارجية مع الاهتمام بالتفاصيل وجودة التنفيذ.",


        service4Title:
            "تنفيذ المشاريع",

        service4Text:
            "إدارة وتنفيذ المشاريع بكفاءة واهتمام بالجودة ومتطلبات العميل.",


        projectsTitle:
            "أعمال نفخر بتنفيذها",

        projectsDescription:
            "مجموعة من المشاريع التي تعكس اهتمامنا بالجودة والدقة والتميز في تنفيذ الأعمال.",

        project1:
            "مشروع ال ستاد",

        project2:
            "مشروع  فيلا",

        project3:
            "مشروع محطة البنزينة",

        project4:
            "تصميم معماري",


        contactTitle:
            "هل لديك مشروع؟ دعنا نتحدث عنه",

        contactDescription:
            "يسعدنا التواصل معك ومناقشة تفاصيل مشروعك والإجابة عن جميع استفساراتك.",

        phone:
            "الهاتف",

        whatsapp:
            "WhatsApp",

        address:
            "العنوان",

        addressText:
            "18 شارع محمد السوهاجي، المنيب، الجيزة، مصر",

        name:
            "الاسم",

        phoneNumber:
            "رقم الهاتف",

        message:
            "رسالتك",

        sendMessage:
            "إرسال الرسالة",


        quickLinks:
            "روابط سريعة",

        footerContact:
            "تواصل معنا",

        companyLocation:
            "18 شارع محمد السوهاجي، المنيب، الجيزة، مصر",

        footerDescription:
            "شركة رؤية للمقاولات والإنشاءات، نسعى لتقديم أعمال متميزة تجمع بين الجودة والدقة والاحترافية.",

        copyright:
            "© 2026 Roya Contracting. جميع الحقوق محفوظة."

    },


    en: {

        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects",
        contact: "Contact Us",

        company: "Roya Contracting",

        heroTitle:
            "We Build Today...<br>For a Better Tomorrow, God Willing",

        heroDescription:
            "We provide comprehensive contracting and construction solutions, with a strong focus on quality, precision, and attention to detail in every project.",

        exploreProjects:
            "Explore Our Projects",

        contactUs:
            "Contact Us",

        aboutTitle:
            "Building with Confidence, Creating a Difference",

        aboutText1:
            "Roya Contracting is a company specialized in contracting and construction. We deliver projects with great attention to quality, precision, and detail.",

        aboutText2:
            "We believe that every successful project begins with understanding our client's needs and ends with delivering results that meet their expectations and vision.",

        aboutButton:
            "Learn More",


        servicesTitle:
            "Complete Solutions for Your Projects",

        servicesDescription:
            "We provide a range of contracting and construction services to meet the needs of different projects with professionalism and attention to detail.",


        service1Title:
            "Contracting Works",

        service1Text:
            "Executing contracting and construction works according to project requirements, with a strong focus on quality and precision.",


        service2Title:
            "Construction Works",

        service2Text:
            "Executing various construction works from the initial stages through to project completion.",


        service3Title:
            "Finishing Works",

        service3Text:
            "Executing interior and exterior finishing works with attention to detail and quality.",


        service4Title:
            "Project Execution",

        service4Text:
            "Managing and executing projects efficiently while maintaining quality and meeting client requirements.",


        projectsTitle:
            "Projects We Are Proud Of",

        projectsDescription:
            "A selection of projects that reflect our commitment to quality, precision, and excellence in execution.",

        project1:
            "The Stadium Project",

        project2:
            "Villa Project",

        project3:
            "Gas Station Project",

        project4:
            "Architectural Design",


        contactTitle:
            "Have a Project? Let's Talk About It",

        contactDescription:
            "We would be happy to discuss your project details and answer all your questions.",

        phone:
            "Phone",

        whatsapp:
            "WhatsApp",

        address:
            "Address",

        addressText:
            "18 Mohamed El-Souhagy Street, El-Moneib, Giza, Egypt",

        name:
            "Name",

        phoneNumber:
            "Phone Number",

        message:
            "Your Message",

        sendMessage:
            "Send Message",


        quickLinks:
            "Quick Links",

        footerContact:
            "Contact Us",

        companyLocation:
            "18 Mohamed El-Sohagy Street, El-Moneeb, Giza, Egypt",

        footerDescription:
            "Roya Contracting and Construction. We strive to deliver outstanding work combining quality, precision, and professionalism.",

        copyright:
            "© 2026 Roya Contracting. All Rights Reserved."

    }

};


/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach(function(element) {

        const key = element.getAttribute("data-lang");

        if (translations[language][key]) {

            element.innerHTML = translations[language][key];

        }

    });


    /* =========================
       PLACEHOLDERS
    ========================= */

    const placeholders = {

        ar: {

            namePlaceholder:
                "اكتب اسمك",

            phonePlaceholder:
                "اكتب رقم هاتفك",

            messagePlaceholder:
                "اكتب تفاصيل استفسارك"

        },

        en: {

            namePlaceholder:
                "Enter your name",

            phonePlaceholder:
                "Enter your phone number",

            messagePlaceholder:
                "Enter your message"

        }

    };


    const inputs =
        document.querySelectorAll("[data-placeholder]");

    inputs.forEach(function(input) {

        const key =
            input.getAttribute("data-placeholder");

        if (placeholders[language][key]) {

            input.placeholder =
                placeholders[language][key];

        }

    });


    /* =========================
       PAGE DIRECTION
    ========================= */

    if (language === "en") {

        document.documentElement.lang = "en";

        document.documentElement.dir = "ltr";

        languageBtn.textContent = "AR";

    } else {

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

        languageBtn.textContent = "EN";

    }


    /* =========================
       SAVE LANGUAGE
    ========================= */

    localStorage.setItem("language", language);

}


/* =========================
   LANGUAGE BUTTON
========================= */

languageBtn.addEventListener("click", function() {

    if (currentLanguage === "ar") {

        currentLanguage = "en";

    } else {

        currentLanguage = "ar";

    }

    changeLanguage(currentLanguage);

});


/* =========================
   LOAD LANGUAGE
========================= */

changeLanguage(currentLanguage);

console.log("SCRIPT WORKING");
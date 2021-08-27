let data = {
  id: "a001",
  image: "./img/image1.jpg",
  content: [
    {
      id: 1,
      title: "history",
      owncontent:
        "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
    },
    {
      id: 2,
      title: "vision",
      owncontent:
        " Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
    {
      id: 3,
      title: "goals",
      owncontent:
        " If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family.",
    },
  ],
};

let titles;
const contentContainer = document.querySelector(".content-container");
render(data);
const curContent = document.querySelector(".content .tab-content");
const tabsContainer = document.querySelector(".content .tabs");
const tabs = tabsContainer.querySelectorAll(".tab");

updateTabContent(tabs[0], titles[0]);
tabsContainer.addEventListener("click", function (e) {
  let title = e.target.dataset.title;
  if (!title) return;
  if (e.target.className.includes("active")) return;

  switchTab(e, title);
});
// <img src="${image}" />
function render(data) {
  let image = data.image;
  let tabs = (titles = data.content.map((article) => article.title));
  contentContainer.innerHTML = `
    <div class="image" style="background-image: url(${image})"></div>
    <div class="content">
      <div class="tabs">
        ${tabs
          .map(
            (tab) => `<div class="tab ${tab}" data-title="${tab}">${tab}</div>`
          )
          .join("\n")}
      </div>
      <div class="tab-content"></div>
  `;
}

function updateTabContent(tab, title) {
  for (let t of tabs) {
    t.classList.remove("active");
  }
  tab.classList.add("active");
  // (*)
  // data.content.map(article => {
  //   if (article.title == titles) curContent.innerHTML = article.owncontent;
  // });

  // (**)
  curContent.innerHTML = `<h2>${title}</h2>
  <p>${data.content[titles.indexOf(title)].owncontent}</p>`;
}

function switchTab(e, tabTitle) {
  updateTabContent(e.target, tabTitle);
}

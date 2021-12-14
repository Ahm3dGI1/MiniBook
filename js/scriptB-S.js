/*nav*/
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle')
    });

}

navSlide();

/* Book Summary */
let Book1 = localStorage.getItem("Book1");
let Book2 = localStorage.getItem("Book2");
let Book3 = localStorage.getItem("Book3");

function inner(id, value) {
    document.getElementById(id).innerHTML = value;
}

if (Book1 == "true") {
    inner("BookTitle", "شآبيب");
    inner("author", "Author: Ahmed khaled Twfik");
    inner("rating", "Rating: 6")
    document.getElementById("Overview_content").innerHTML = "هذه ليست حربًا لكنها تدانيها في الخطورة والأهمية. الهدف الاستراتيجي واضح جلي، لكنه يحتاج إلى مبرر أخلاقي وتاريخي. الوسيلة لن تكون نظيفة تمامًا لكن الغاية مبررة ومحترمة. القليل من الماكيافيللية لن يضر أحدًا... كلهم من العرب المقيمين في الولايات، قال لهم: - أريد تاريخًا مزيفًا! حلم واحد كان يلاحق مكرم؛ الأستاذ في جامعة هارفارد، أن يلتقي كل عرب المهجر في موضع واحد. كان يحلم بدولة واحدة يجتمع فيها العرب بعدما تشتتوا في العالم، هناك لن يضطهدهم أحد ولن يخيفهم أحد. سوف تكون دولة قوية لأنها ستمزج بين ما تعلموه في كل الحضارات.     بأسلوبه المتفرد، يصطحبنا د. أحمد خالد توفيق في روايته الجديدة  شآبيب إلى رحلة ممتعة مليئة بالإثارة من النرويج إلى الولايات المتحدة، مرورا بليبيريا ومصر وأستراليا، قبل أن يستقر عند خط الاستواء. يطرح العديد من الأفكار الجريئة ليظل السؤال: هل يمكن لرجل واحد أن يُصلح العالم، حتى لو كان يؤمن بأنه الشخص المناسب الذي جاء في الزمن المناسب ليقوم بالمهمة المناسبة؟ "
    document.getElementById("Book_cover").src = "../images/shab.jpg"
} else if (Book2 == "true") {
    document.getElementById("BookTitle").innerHTML = "1919"
    document.getElementById("author").innerHTML = "Author: Ahmed Morad"
    document.getElementById("Overview_content").innerHTML = "سيختطفك أحمد مراد في آلة زمن، ليهبط بك في حقبة تغلي فيها القاهرة بالأحداث.. وثبة زمنية إلى عالم متشابك يمسك المؤلف مقتدرًا بكل مفاتيحه؛ بين سعد زغلول وتعنت البريطانيين، قصة الوفد ومقهى «متاتيا» جماعة سرية تعمل تحت مقهى «ريش»، وعوالم البغاء المقنن.. شخصيات عديدة سوف تتعاطف معها أو تمقتها، أو تفعل الشيئين بلا تحفظ، بحوار مفعم بالحيوية حتى لتوشك على سماعه يتردد في أذنك، وتفاصيل تاريخية مضنية ودقيقة. سوف تدرك أن البعض ما زال مصرًّا على الجدية والإتقان "
    document.getElementById("Book_cover").src = "../images/1919.jpg"
} else if (Book3 == "true") {
    document.getElementById("BookTitle").innerHTML = "لوكاندة بير الوطاويط"

    document.getElementById("Book_cover").src = "../images/locanda.jpg"
} else {
    console.log("hello")
    par.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus repudiandae amet laboriosam aut soluta adipisci, similique facilis magnam nihil praesentium cum nobis quae nesciunt! Laborum molestias eaque soluta optio sunt?"
}
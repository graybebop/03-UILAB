window.addEventListener('load', () => {

    menu.init();
})
const dir = "./"
const listFlexLayout = [ //

    {
        name: "3Columns Even",
        link: "flex-layout-3columns.html"
    }, {
        name: "Header and Footer 3Columns Even",
        link: "flex-layout-header_footer_3col_even.html"
    },

];
const menu = {
    init: function() {
        this.gnbWrapper = document.getElementById("gnb-wrapper")
        if (this.gnbWrapper) {
            this.gnb = document.createElement("ul");
            this.gnbWrapper.appendChild(this.gnb);
            this.gnb.setAttribute("id", "flex-gnb");


            for (var index in listFlexLayout) {
                this.li = document.createElement("li");
                this.gnb.appendChild(this.li);

                this.li.innerHTML = '<a href="' + dir + listFlexLayout[index].link + '">' + listFlexLayout[index].name + '</a>';
            }

            this.gnbWrapper.classList.add("hide");


            this.btnToggle = document.getElementById("btnToggle");
            this.btnToggle.innerText = "열기"

            this.dimmed = document.getElementsByClassName('flex-dimmed')[0];
            this.layerMask();


            this.btnToggle.addEventListener('click', (e) => {
                this.toggleMenu();
            });
            this.dimmed.addEventListener('click', (e) => {
                // this.layerMask();
                this.toggleMenu();

            });
        } else {
            alert('aaas')
        }




    },
    layerMask: function() {


        if (!this.dimmed.classList.contains('hide')) {
            //open
            this.dimmed.classList.add('hide');


        } else {
            //close
            this.dimmed.classList.remove('hide');

        }

    },

    toggleMenu: function() {

        if (this.btnToggle.classList.contains("close")) {
            this.btnToggle.classList.remove("close");
            this.btnToggle.classList.add("open");
            this.btnToggle.innerHTML = "닫기";
            this.gnbWrapper.classList.remove("hide");
            this.layerMask();
        } else if (this.btnToggle.classList.contains("open")) {
            this.btnToggle.classList.remove("open");
            this.btnToggle.classList.add("close");
            this.btnToggle.innerHTML = "열기";
            this.gnbWrapper.classList.add("hide");
            this.layerMask();
        }
    },
}
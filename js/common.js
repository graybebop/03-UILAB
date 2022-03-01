window.addEventListener('load', () => {
    ui.init();
});
const ui = {
    init: function() {


        const buttons = document.querySelectorAll('button');
        const btns = document.querySelectorAll('.btn')

        this.isButton.using() ? this.isButton.init(buttons) : false;
        this.isButton.using() ? this.isButton.init(btns) : false;

        //this.createInput();

        this.goback();

    },
    // createInput: function() {
    //     let textFiled = document.querySelectorAll('input');

    //     if (textFiled.length > 0) {
    //         for (var item of textFiled) {
    //             if (item.getAttribute('type') == "text") { //type text면 true 반환
    //                 item.setAttribute('class', 'text-field this is type text');
    //             }
    //         }
    //     }

    // },
    isButton: {
        init: function(eles) {
            for (const ele of eles) {
                ele.addEventListener("click", ui.createRipple);
            }
        },

        using: function() {

            return true;
        }
    },

    lnbMenu: {
        init: function() {
            let checkLnbMenu = document.getElementById('LNB')[0];
            if (!checkLnbMenu) {
                const menuData = [{
                        menuName: 'Buttons',
                        menuLink: 'buttons.html',
                    },
                    {
                        menuName: 'Input',
                        menuLink: 'input.html',
                    },
                    {
                        menuName: 'Switch',
                        menuLink: 'switch.html',
                    },
                    {
                        menuName: 'Tabs',
                        menuLink: 'tabs.html',
                    },
                    {
                        menuName: 'Slider',
                        menuLink: 'carousel.html',
                    },
                    {
                        menuName: 'upload files',
                        menuLink: 'upload.html',
                    },
                    {
                        menuName: 'Blockquotes',
                        menuLink: 'blockquote.html',
                    },
                    {
                        menuName: 'Alerts',
                        menuLink: 'alerts.html',
                    },
                    {
                        menuName: 'Grid',
                        menuLink: 'grid.html',
                    },
                    {
                        menuName: 'Dividers',
                        menuLink: 'dividers.html',
                    },
                    {
                        menuName: 'Layer Popup',
                        menuLink: 'layer-popup.html',
                    },
                    {
                        menuName: 'Avatars',
                        menuLink: 'avatars.html',
                    },
                ];

                let _this = this;

                _this.createLnbMenu(menuData);
            }

        },
        createLnbMenu: function(obj) {
            let index = 0;
            for (let items in obj) {


                let li = document.createElement('li');
                li.appendChild(document.createTextNode(obj[index].menuName));

                let ulElement = document.getElementsByClassName('tpod-lnb')[0];
                mainMenuItem = ulElement.appendChild(li);

                mainMenuItem.setAttribute('class', obj[index].menuName);
                mainMenuItem.setAttribute('data-link', obj[index].menuLink);

                li.addEventListener('click', function(e) {
                    window.location.href = e.target.getAttribute('data-link');
                });

                index++;
            }
        },

        using: function() {
            return true;
        }
    },

    tabFunction: function(tabsEle, conId) {
        const tabs = document.querySelectorAll(tabsEle);
        tabs.forEach(function(tab) {
            tab.addEventListener("click", function(e) {
                const id = Number(e.target.dataset.id.substring(2, 3));
                tabs.forEach(function(tab) {
                    tab.classList.remove("on");
                });
                e.target.classList.add("on");
                const element = document.querySelectorAll(`${conId}` + ' .con-sec ');
                element.forEach(function(ele, i) {
                    element[i].classList.remove("on");
                });
                element[id - 1].classList.add("on");
            });
        });
    },

    closeAlert: function(elm) {
        elm.parentElement.style.display = 'none';
    },
    toggle_check_box: function(master, group) {
        var cbarray = document.getElementsByClassName(group);
        for (var i = 0; i < cbarray.length; i++) {
            var cb = document.getElementById(cbarray[i].id);
            cb.checked = master.checked;
        }
    },


    // 팝업관련
    closeLayerPopup: function(id) {
        $(id).fadeOut(200, function() {
            $('.popup-layer-mask').fadeOut(200, function() {

            });
        });
    },

    layerPopup: function(id) {
        $('.popup-layer-mask').fadeIn(200, function() {
            $("html, body").animate({
                scrollTop: 0
            }, function() {
                $(id).fadeIn(200, function() {});
            });
            return false;
        });
    },

    //Go back
    goback: function() {
        //window.history.back();
        window.location.href = "list.html";
    },
    goLink: function(cls, link) {
        let btn = document.getElementsByClassName(cls)[0];
        btn.addEventListener('click', (e) => {
            window.location.href = link;
        });

    },

    goLinks: function(link) {

        window.location.href = link;

    },

    backToPrevPage: function() {
        window.history.back();
    },


    createRipple: function(event) {
        let button = event.currentTarget;
        let circle = document.createElement("span");
        let diameter = Math.max(button.clientWidth, button.clientHeight);
        let radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${event.offsetX- radius}px`;
        circle.style.top = `${event.offsetY-radius}px`;

        circle.classList.add("ripple-dark");

        let ripple = button.getElementsByClassName("ripple-dark")[0];

        if (ripple) {
            ripple.remove();
        }
        button.appendChild(circle);

        const transition = document.querySelector('.ripple-dark');

        transition.addEventListener('animationend', () => {
            button.removeChild(transition);
        });
    },

    gotoUrl: function() {
        let link_ref = document.querySelectorAll('.grid-list li');
        if (link_ref) {
            link_ref.forEach((target, index, p) => {

                target.addEventListener('click', () => {
                    window.location.href = p[index].getAttribute('data-link');
                })
            })

        }

    },

    goback: function() {
        let topHeader = document.getElementById('header-back');
        if (topHeader) {
            document.querySelectorAll('body')[0].style.marginTop = "80px"
            topHeader.innerHTML = '<div class="history-back"><button class="btn btn-circle btn-sm" onclick="window.history.back()" style="border:none !important;"><span class="material-icons">arrow_back</span></button><span style="vertical-align: middle;">이전페이지로</span></div>';

            //  window.history.back();
        }

    },
    generateRandomNumbers: function(min, max, places) { //최소값을 정한후 맥스값까지 랜덤값 구하기
        // If both the minimum and maximum values are integers, return a random integer. Don't let the user specify any decimal places.
        if (Number.isInteger(min) && Number.isInteger(max)) {
            if (places !== undefined) {
                new Error("Cannot specify decimal places with integers.");
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Otherwise, return a random floating point number with specified decimal places.
        else {

            // Make sure the minimum value is a number.
            if (Number.isNaN(Number.parseFloat(min))) {
                new Error("Minimum value is not a number.");
            }

            // Make sure the maximum value is a number.
            if (Number.isNaN(Number.parseFloat(max))) {
                new Error("Maximum value is not a number.");
            }

            // Make sure the decimal places value is a non-negative number greater than 0.
            if (Number.isInteger(places) === false) {
                new Error("Number of decimal places is not a number.");

            }

            if (places <= 0) {
                new Error("Number of decimal places must be at least 1.");
            }

            // Generate the floating point number.
            let value = (Math.random() * (max - min + 1)) + min;
            return Number.parseFloat(value).toFixed(places);
        }
    }
}
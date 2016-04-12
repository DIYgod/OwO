(() => {
    class OwO {
        constructor(option) {
            const defaultOption = {
                container: document.getElementsByClassName('OwO')[0],
                target: document.getElementsByTagName('textarea')[0],
                dataURL: 'https://api.anotherhome.net/OwO/OwO.json'
            };
            for (let defaultKey in defaultOption) {
                if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                    option[defaultKey] = defaultOption[defaultKey];
                }
            }
            this.container = option.container;
            this.target = option.target;

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                        this.odata = JSON.parse(xhr.responseText);
                        this.init(option);
                    }
                    else {
                        console.log('OwO data request was unsuccessful: ' + xhr.status);
                    }
                }
            };
            xhr.open('get', option.dataURL, true);
            xhr.send(null);
        }

        init(option) {
            this.area = option.target;
            this.packages = Object.keys(this.odata);

            // fill in HTML
            let html = `
            <div class="OwO-logo"><span>${option.logo}</span></div>
            <div class="OwO-body" style="width: ${option.width}">`;
            
            for (let i = 0; i < this.packages.length; i++) {

                html += `
                <ul class="OwO-items" style="max-height: ${parseInt(option.maxHeight) - 53 + 'px'};">`;

                let opackage = this.odata[this.packages[i]];
                for (let i = 0; i < opackage.length; i++) {

                    html += `
                    <li title="${opackage[i].text}">${opackage[i].icon}</li>`;

                }

                html += `
                </ul>`;
            }
            
            html += `
                <div class="OwO-bar">
                    <ul class="OwO-packages">`;

                    for (let i = 0; i < this.packages.length; i++) {

                        html += `
                        <li class="OwO-package-active"><span>${this.packages[i]}</span></li>`

                    }

            html += `
                    </ul>
                </div>
            </div>
            `;
            this.container.innerHTML = html;

            // bind event
            this.logo = this.container.getElementsByClassName('OwO-logo')[0];
            this.logo.addEventListener('click', () => {
                this.toggle();
            });

            this.container.getElementsByClassName('OwO-items')[0].addEventListener('click', (e)=> {
                if (e.target && e.target.nodeName.toUpperCase() === 'LI') {
                    const cursorPos = this.area.selectionEnd;
                    let areaValue = this.area.value;
                    this.area.value = areaValue.slice(0, cursorPos) + e.target.innerHTML + areaValue.slice(cursorPos);
                    this.area.focus();
                }
            });
        }

        toggle() {
            if (this.container.classList.contains('OwO-open')) {
                this.container.classList.remove('OwO-open');
            }
            else {
                this.container.classList.add('OwO-open');
            }
        }

        open() {

        }
    }
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = OwO
    }
    else {
        window.OwO = OwO;
    }
})();
function hideRead(readDay = '', readTime = '', myName = '') {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '全表示';
    toggleButton.addEventListener('click', () => {
        const hiddenElements = document.querySelectorAll('.read, .read ~ *, .readDayList ~ *');
        if (toggleButton.textContent === '全表示') {
            toggleButton.textContent = '非表示';
            Array.prototype.forEach.call(hiddenElements, hiddenElement => {
                hiddenElement.style.display = '';
            });
        } else {
            toggleButton.textContent = '全表示';
            Array.prototype.forEach.call(hiddenElements, hiddenElement => {
                hiddenElement.style.display = 'none';
            });
        }
    });
    document.querySelector('.social-activity-feed').prepend(toggleButton);

    const mimeToggleButton = document.createElement('button');
    mimeToggleButton.textContent = '自分だけ全表示';
    mimeToggleButton.addEventListener('click', () => {
        const hiddenElements = document.querySelectorAll('.mime');
        if (mimeToggleButton.textContent === '自分だけ全表示') {
            mimeToggleButton.textContent = '自分だけ非表示';
            Array.prototype.forEach.call(hiddenElements, hiddenElement => {
                hiddenElement.style.display = '';
            });
        } else {
            mimeToggleButton.textContent = '自分だけ全表示';
            Array.prototype.forEach.call(hiddenElements, hiddenElement => {
                hiddenElement.style.display = 'none';
            });
        }
    });
    document.querySelector('.social-activity-feed').prepend(mimeToggleButton);
    
    const days = document.querySelectorAll('h4');
    Array.prototype.some.call(days, day => {
        const times = day.nextElementSibling.querySelectorAll('.activity-time');
        Array.prototype.some.call(times, time => {
            const parent = time.parentElement;
            if (day.textContent === readDay && time.textContent === readTime) {
                parent.classList.add('read');
                parent.style.display = 'none';
            } else {
                const links = parent.querySelectorAll('.activity-data a');
                Array.prototype.some.call(links, link => {
                    if (link.textContent === myName) {
                        parent.classList.add('mime');
                        parent.style.display = 'none';
                        return true;
                    }
                    if (link.textContent === '閲覧') {
                        parent.style.flexWrap = 'wrap';
                        const button = document.createElement('button');
                        button.textContent = '表示';
                        parent.appendChild(button);
                        const ifreme = document.createElement('iframe');
                        ifreme.addEventListener('load', () => {
                            ifreme.contentDocument.getElementById('globalNavigation').style.display = 'none';
                            ifreme.contentDocument.getElementById('PageHeader').style.display = 'none';
                            ifreme.contentDocument.getElementById('content').style.display = 'none';
                            ifreme.contentDocument.getElementById('articleCategories').style.display = 'none';
                            ifreme.contentDocument.getElementById('WikiaRailWrapper').style.display = 'none';
                            ifreme.contentDocument.getElementById('mixed-content-footer').style.display = 'none';
                            ifreme.contentDocument.querySelector('.wds-community-header').style.display = 'none';
                            ifreme.contentDocument.querySelector('.wds-global-footer').style.display = 'none';
                        });
                        button.addEventListener('click', () => {
                            if (parent.querySelector('iframe') != null) {
                                if (ifreme.style.display === 'none') {
                                    button.textContent = '非表示';
                                    ifreme.style.display = '';
                                } else {
                                    button.textContent = '表示';
                                    ifreme.style.display = 'none';
                                }
                                return;
                            }

                            button.textContent = '非表示';
                            parent.appendChild(document.createElement('br'));
                            ifreme.src = link.href;
                            ifreme.style.height = '300px';
                            ifreme.style.width = '100%';
                            parent.appendChild(ifreme);
                        });
                    }
                });
            }
        });
        if (day.textContent === readDay) {
            day.nextElementSibling.classList.add('readDayList');
            return true;
        }
    });
    const hiddenElements = document.querySelectorAll('.read ~ *, .readDayList ~ *');
    Array.prototype.forEach.call(hiddenElements, hiddenElement => {
        hiddenElement.style.display = 'none';
    });
}

const counters = document.querySelectorAll('.ra-counter');
const section_counter = document.querySelector('#ra-counters-section');

let counterObserver = new IntersectionObserver((entries, observer) => {
    let [entry] = entries;

    if (!entry.isIntersecting)
        return;

    const speed = 200;
    counters.forEach(counter => {
        let count = +counter.innerText;

        const updateCount = () => {
            const target = +counter.getAttribute('data-target');

            const inc = target / speed;

            if (count < target) {
                count += inc;
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            }
            else {
                counter.innerText = target;
            }
        }

        updateCount();
    });

    observer.unobserve(section_counter);

}, {
    root: null,
    threshold: 0.4,
});

counterObserver.observe(section_counter);
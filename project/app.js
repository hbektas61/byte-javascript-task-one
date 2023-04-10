document.addEventListener("DOMContentLoaded", () => {
    const products = [{
            name: 'OVERSIZE CEKET',
            image: 'media/product-1.png',
            price: '665.91',
            oldPrice: '789.90'
        },
        {
            name: 'LOAFER AYAKKABI',
            image: 'media/product-2.png',
            price: '834.90',
            oldPrice: ''
        },
        {
            name: 'YELEK',
            image: 'media/product-3.png',
            price: '395.91',
            oldPrice: '459.90'
        },
        {
            name: 'PANTOLON',
            image: 'media/product-4.png',
            price: '467.91',
            oldPrice: '509.90'
        }
    ];

    const sliderWrapper = document.querySelector('.slider-wrapper');

    // Her bir ürün için bir dinamik slide oluşturuluyor
    products.forEach((product) => {
        const $slide = document.createElement('div');
        const $productWrapper = document.createElement('div');

        $slide.classList.add('slide');
        $productWrapper.classList.add('product-wrapper');

        const $image = document.createElement('img');
        $image.src = product.image;

        $productWrapper.appendChild($image);
        $slide.appendChild($productWrapper);

        const $productContainer = document.createElement('div');
        $productContainer.classList.add('product-container');

        const $productNameWrapper = document.createElement('div');
        const $productName = document.createElement('span');
        
        $productNameWrapper.classList.add('product-name-wrapper'); 
        $productName.classList.add('product-name');
        
        $productName.textContent = product.name;
        
        $productNameWrapper.appendChild($productName);
        $productContainer.appendChild($productNameWrapper);
        
        const $priceWrapper = document.createElement('div');
        const $price = document.createElement('span');
        
        $priceWrapper.classList.add('price-wrapper');   
        $price.classList.add('price');

        $price.textContent = '₺' +  product.price;

        $priceWrapper.appendChild($price);
        $productContainer.appendChild($priceWrapper);

        if (product.oldPrice) {
            const $oldPrice = document.createElement('span');
            
            $oldPrice.classList.add('old-price');
            
            $oldPrice.textContent = '₺' + product.oldPrice;
            
            $priceWrapper.appendChild($oldPrice);
           
            // İndirim badgesi ekleme
            const $discountBadgeWrapper = document.createElement('div');
            const $discountBadgeContainer = document.createElement('div');
            const $discountBadgeTextWrapper = document.createElement('div');

            $discountBadgeWrapper.classList.add('discount-badge');
            $discountBadgeContainer.classList.add('discount-badge-container');
            $discountBadgeTextWrapper.classList.add('discount-badge-text');
            
            $discountBadgeTextWrapper.textContent = 'Off';
            $discountBadgeContainer.textContent = (100 - 100 * (Number(product.price) / Number(product.oldPrice))).toFixed() + '%';
            
            $discountBadgeContainer.appendChild($discountBadgeTextWrapper);
            $discountBadgeWrapper.appendChild($discountBadgeContainer);
            $productContainer.appendChild($discountBadgeWrapper);
        }

        $slide.appendChild($productContainer);

        const $buttonWrapper = document.createElement('button');
        
        $buttonWrapper.classList.add('button-wrapper');
        
        $buttonWrapper.textContent = 'Quick View';
        
        $productContainer.appendChild($buttonWrapper);
        $productWrapper.appendChild($productContainer);
        $slide.appendChild($productWrapper);
        sliderWrapper.appendChild($slide);
    });

    // Slider'ın kontrolünü sağlamak için önceki/sonraki butonlara ve main imageye basıldıgında tıklama olayları ekleme
    const slidePrev = document.querySelector('.slide-prev');
    const slideNext = document.querySelector('.slide-next');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const slideImages = document.querySelectorAll('.prev-buttons');
    let slideIndex = 0;

    slideImages.forEach((element) => {
        element.addEventListener('click', (event) => {
            slideIndex = Number(event.target.getAttribute('data-id'));
            slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;

            sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;            
        });
    });

    slidePrev.addEventListener('click', () => {
        slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;

        sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });

    slideNext.addEventListener('click', () => {
        slideIndex = slideIndex < 3 ? slideIndex + 1 : 3;
    
        sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
});
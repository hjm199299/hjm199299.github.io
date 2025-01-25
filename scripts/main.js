document.addEventListener('DOMContentLoaded', () => {
    const currentView = document.body.dataset.view;

    if (currentView === 'index') {
        const btnMain = document.getElementById('btnMain');

        btnMain.addEventListener('click', () => {
            location.href = 'test_1_name.html';
        });

        const backButton = document.querySelector('.btn_back');

        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (currentView === 'test_1_name') {
        const userNameInput = document.getElementById('userName');
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        const nextButton = document.getElementById('nextButton');

        const backButton = document.querySelector('.btn_back');

        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        let selectedGender = null;
        let userName = null;

        // 유효성 검사 함수
        function validateForm() {
            const isNameValid = userNameInput && userNameInput.value.trim() !== '';
            const isGenderValid = Array.from(genderRadios).some(radio => radio.checked);

            if (isNameValid && isGenderValid) {
                nextButton.classList.add('btn_next_active');
                nextButton.classList.remove('btn_main_disable');
                nextButton.disabled = false;

                const checkedRadio = Array.from(genderRadios).find(radio => radio.checked);
                selectedGender = checkedRadio ? checkedRadio.value : null;
                userName = userNameInput.value;

            } else {

                nextButton.classList.add('btn_main_disable');
                nextButton.classList.remove('btn_next_active');
                nextButton.disabled = true;
            }
        }

        // 이벤트 리스너 추가
        if (userNameInput) {
            userNameInput.addEventListener('input', validateForm);
        }

        // genderRadios가 비어 있지 않은 경우에만 이벤트 리스너 추가
        if (genderRadios.length > 0) {
            genderRadios.forEach(radio => radio.addEventListener('change', validateForm));
        }

        // 버튼 클릭 이벤트
        nextButton.addEventListener('click', () => {
            if (!nextButton.disabled) {
                const userNameInput = document.getElementById('userName');
                const userName = userNameInput.value.trim();

                console.log(`닉네임: ${userName}, 성별: ${selectedGender}`);

                if (userName) {
                    localStorage.setItem('userName', userName); // 이름 저장
                }

                if (selectedGender === 'male') {
                    window.location.href = 'test_male_1.html';
                } else if (selectedGender === 'female') {
                    window.location.href = 'test_female_1.html';
                }
            }

            const userNameInput = document.getElementById('userName');
        });
    }

});

const questions = [
    { text: '목소리가 큰 편인가요?', choices: [
        { text: '매우 그렇다 (난 확성기다)', ePoint: 0, tPoint:3, kPoint:3 },
        { text: '약간 그렇다 (가끔 볼륨 조절 실패)', ePoint: 1, tPoint:2, kPoint:1 },
        { text: '약간 아니다 (사회적 데시벨 준수)', ePoint: 2, tPoint:1, kPoint:1},
        { text: '전혀 아니다 (ASMR)', ePoint: 3, tPoint:0, kPoint:3 }
    ] },
    { text: '원칙을 따르는 편인가요?', choices: [
        { text: '매우 그렇다 (난 원칙의 화신)', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다 (가끔 융통성 발휘)', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다 (있으면 좋고 없으면 말고)', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다 (난 자유롭고 싶어)', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '혼자보다 친구들과 다니는 편인가요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '연애할 때 관계를 리드하는 편인가요?', choices: [
        { text: '매우 그렇다', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '약간 아니다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '남들에게 거절을 잘 하는 편인가요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '내 평균 식사량은?', choices: [
        { text: '2인분 이상', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '1.5인분', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '1인분', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '0.5인분', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '운동을 하는 이유가 무엇인가요?', choices: [
        { text: '근력향상', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '체력증진', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '몸매관리', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '안함', ePoint: 2, tPoint: 1, kPoint: 1 }
    ] },
    { text: '가장 선호하는 취미는 무엇인가요?', choices: [
        { text: '자기계발 (투자 공부, 스피킹 등)', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '액티비티 (캠핑, 등산 등)', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '만들기 (베이킹, 뜨개질 등)', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '쇼핑 (패션, 문구 등)', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '코인 총 투자 금액이 얼마인가요?', choices: [
        { text: '천만 원대 이상', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '백만 원대', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '십만 원대', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '안 함', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '사랑스럽다는 말을 종종 듣나요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] }
];

document.addEventListener('DOMContentLoaded', () => {
    const questionTitle = document.getElementById('questionTitle');
    const answerList = document.getElementById('answerList');
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    let currentQuestionIndex = 0;
    let ePoint = 0, tPoint = 0, kPoint = 0;

    // 사용자가 선택한 답변 저장 배열 (각 질문의 선택지 인덱스 저장)
    let userAnswers = new Array(questions.length).fill(null);

    // ✅ 기존 점수를 제거하는 함수
    function removePreviousScore(index) {
        if (userAnswers[index] !== null) {
            const previousChoice = questions[index].choices[userAnswers[index]];
            ePoint -= previousChoice.ePoint;
            tPoint -= previousChoice.tPoint;
            kPoint -= previousChoice.kPoint;
        }
    }

    // 질문 렌더링 함수
    function renderQuestion(index) {
        console.log('renderQuestion 함수 호출됨. 현재 index:', index);
        const question = questions[index];

        if (!question) {
            console.error('해당 index에 대한 질문을 찾을 수 없습니다:', index);
            return;
        }

        // 질문 텍스트 렌더링
        questionTitle.textContent = question.text;

        // 질문 순서 렌더링
        const questionOrder = document.getElementById('questionOrder');
        questionOrder.textContent = `${index + 1}/${questions.length}`;

        // 이미지 컨테이너에 이미지 삽입
        const questionImageContainer = document.getElementById('questionImageContainer');
        questionImageContainer.innerHTML = ''; // 기존 이미지 제거

        const questionImage = document.createElement('img');
        questionImage.src = `assets/images/img_wo${index + 1}.png`;
        questionImage.alt = `Question ${index + 1}`;
        questionImage.classList.add('question-img');
        questionImageContainer.appendChild(questionImage);

        // 답변 리스트 렌더링
        answerList.innerHTML = ''; // 기존 리스트 제거
        question.choices.forEach((choice, idx) => {
            const li = document.createElement('li'); // 리스트 항목 생성
            li.classList.add('answer-item');

            const label = document.createElement('label'); // 라벨 생성
            label.classList.add('custom-radio');

            const radio = document.createElement('input'); // 라디오 버튼 생성
            radio.type = 'radio';
            radio.name = 'question';
            radio.value = idx;
            radio.id = `choice_${idx}`;

            const svg = `
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="radio-icon">
                    <circle cx="12" cy="12" r="9" stroke="#CBCBCB" stroke-width="2" fill="none"></circle>
                    <circle class="inner-circle" cx="12" cy="12" r="5" fill="none"></circle>
                </svg>
            `;

            label.innerHTML = svg;
            label.appendChild(radio);

            const span = document.createElement('span');
            span.textContent = choice.text;
            label.appendChild(span);

            li.appendChild(label);
            answerList.appendChild(li);

            // 이전에 선택한 답변이 있으면 체크 표시
            if (userAnswers[index] === idx) {
                radio.checked = true;
                label.classList.add('checked');
            }

            // 라디오 버튼 클릭 시 선택값 저장
            radio.addEventListener('change', () => {
                document.querySelectorAll('.custom-radio').forEach((label) => {
                    label.classList.remove('checked');
                });

                if (radio.checked) {
                    radio.closest('.custom-radio').classList.add('checked');
                }

                // ✅ 기존 점수 제거 (중복 합산 방지)
                removePreviousScore(currentQuestionIndex);

                // ✅ 새 선택지 저장
                userAnswers[currentQuestionIndex] = idx;

                // ✅ 새 점수 추가
                const selectedChoice = questions[currentQuestionIndex].choices[idx];
                ePoint += selectedChoice.ePoint;
                tPoint += selectedChoice.tPoint;
                kPoint += selectedChoice.kPoint;

                console.log('점수 업데이트:', ePoint, tPoint, kPoint);

                // ✅ 버튼 활성화 (선택지가 있을 때만)
                nextButton.disabled = false;
                nextButton.classList.add('btn_next_active');
                nextButton.classList.remove('btn_main_disable');
            });
        });

        // ✅ 다음 버튼을 기본적으로 비활성화 (이전 질문에서 돌아왔을 때도)
        if (userAnswers[currentQuestionIndex] === null) {
            nextButton.disabled = true;
            nextButton.classList.remove('btn_next_active');
            nextButton.classList.add('btn_main_disable');
        } else {
            nextButton.disabled = false;
            nextButton.classList.add('btn_next_active');
            nextButton.classList.remove('btn_main_disable');
        }
    }

    // 초기 질문 렌더링
    renderQuestion(currentQuestionIndex);

    // 이전 버튼 이벤트
    backButton.addEventListener('click', () => {
        if (currentQuestionIndex === 0) {
            window.location.href = 'test_1_name.html';
        } else {
            // ✅ 현재 질문의 기존 점수 제거
            removePreviousScore(currentQuestionIndex);

            currentQuestionIndex--;

            // ✅ 버튼 비활성화 추가
            nextButton.disabled = true;
            nextButton.classList.remove('btn_next_active');
            nextButton.classList.add('btn_main_disable');

            renderQuestion(currentQuestionIndex);
        }
    });

    // 다음 버튼 이벤트
    nextButton.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === null) {
            console.log('답변을 선택하세요.');
            return;
        }

        // ✅ 점수는 이미 선택 시 업데이트되므로 여기서는 추가적인 점수 업데이트 X

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;

            // ✅ 버튼 비활성화 추가 (새 질문으로 넘어갈 때도 비활성화)
            nextButton.disabled = true;
            nextButton.classList.remove('btn_next_active');
            nextButton.classList.add('btn_main_disable');

            renderQuestion(currentQuestionIndex);
        } else {
            let resultType;

            if (tPoint > ePoint) {
                if (kPoint > 20) {
                    resultType = 'teto_female_1';
                } else if (kPoint > 10) {
                    resultType = 'teto_female_2';
                } else {
                    resultType = 'teto_female_3';
                }
            } else if (ePoint > tPoint) {
                if (kPoint > 20) {
                    resultType = 'egen_female_1';
                } else if (kPoint > 10) {
                    resultType = 'egen_female_2';
                } else {
                    resultType = 'egen_female_3';
                }
            } else {
                resultType = 'egen_female_3';
            }

            window.location.href = `result.html?type=${resultType}`;
        }
    });
});

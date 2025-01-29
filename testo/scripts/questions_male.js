const questions = [
    { text: '한 달 동안 올리브영을 몇 번 방문하나요?', choices: [
        { text: '직원이랑 친구다(5회 이상)', ePoint: 3, tPoint:0, kPoint:3 },
        { text: '종종 간다 (3-4회)', ePoint: 2, tPoint:0, kPoint:2 },
        { text: '가끔 간다 (1-2회)', ePoint: 1, tPoint:1, kPoint:0},
        { text: '안 간다 (0회)', ePoint: 0, tPoint:2, kPoint:2 }
    ] },
    { text: '모르는 사람에게 친절한 편인가요?', choices: [
        { text: '매우 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 그렇다', ePoint: 1, tPoint: 1, kPoint: 0 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '여사친이 포함된 무리를 자주 만나나요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '일주일에 운동을 몇 번 하나요?', choices: [
        { text: '5회 이상', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '3-4회', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '1-2회', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '0회', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '패션 브랜드를 잘 아는 편인가요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '인스타 게시물 개수는 몇 개 인가요?', choices: [
        { text: '아마추어 인플루언서 (11개 이상)', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '기록은 남기는 편 (5-10개)', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '가끔 올리는 편 (2-3개)', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '눈팅형 (계정 없음-1개)', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '당신의 이상형은? (복수 선택 안 됨)', choices: [
        { text: '돈 잘 버는 사람', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '예쁜 사람', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '몸매 좋은 사람', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '성격 좋은 사람', ePoint: 2, tPoint: 1, kPoint: 1 }
    ] },
    { text: '카페 투어를 좋아하나요?', choices: [
        { text: '매우 그렇다', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '약간 아니다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] },
    { text: '주식 및 투자에 관심이 많은가요?', choices: [
        { text: '매우 그렇다', ePoint: 0, tPoint: 3, kPoint: 3 },
        { text: '약간 그렇다', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '약간 아니다', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '전혀 아니다', ePoint: 3, tPoint: 0, kPoint: 3 }
    ] },
    { text: '음악 취향을 선택해 주세요!', choices: [
        { text: '인디 밴드', ePoint: 3, tPoint: 0, kPoint: 3 },
        { text: '힙합', ePoint: 2, tPoint: 1, kPoint: 1 },
        { text: '발라드', ePoint: 1, tPoint: 2, kPoint: 1 },
        { text: '취향 없음', ePoint: 0, tPoint: 3, kPoint: 3 }
    ] }
];

document.addEventListener('DOMContentLoaded', () => {
    const questionTitle = document.getElementById('questionTitle');
    const answerList = document.getElementById('answerList');
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    let currentQuestionIndex = 0;
    let ePoint = 0, tPoint = 0, kPoint = 0;

    // 현재 선택된 값 저장
    let selectedIndex = null;  

    // 질문 렌더링 함수
    function renderQuestion(index) {
        console.log('renderQuestion 함수 호출됨. 현재 index:', index);
        const question = questions[index];

        if (!question) {
            console.error('해당 index에 대한 질문을 찾을 수 없습니다:', index);
            return;
        }

        // 디버깅: 현재 렌더링되는 질문 확인
        console.log('현재 질문:', question);

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
            li.classList.add('answer-item'); // 클래스 추가

            const label = document.createElement('label'); // 라벨 생성
            label.classList.add('custom-radio'); // 라벨에 클래스 추가

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

            label.innerHTML = svg; // SVG 추가
            label.appendChild(radio); // 라디오 버튼 추가

            const span = document.createElement('span'); // 동적으로 텍스트 추가할 <span> 생성
            span.textContent = choice.text; // choice.text를 사용해 텍스트 삽입
            label.appendChild(span); // 라벨에 <span> 추가

            li.appendChild(label); // 리스트 항목에 라벨 추가
            answerList.appendChild(li); // 전체 리스트에 항목 추가
        });

        // 디버깅: 렌더링된 리스트 확인
        console.log('렌더링된 리스트:', answerList.innerHTML);

        // 다음 버튼 초기화
        nextButton.disabled = true;
        nextButton.classList.remove('btn_next_active');
        nextButton.classList.add('btn_main_disable');

        // 선택된 값 초기화
        selectedIndex = null;

        // 라디오 버튼 이벤트 리스너 추가
        const radios = document.querySelectorAll('input[name="question"]');
        radios.forEach((radio, idx) => {
            radio.addEventListener('change', () => {
                document.querySelectorAll('.custom-radio').forEach((label) => {
                    label.classList.remove('checked');
                });

                // 선택된 라디오 버튼의 부모에 .checked 추가
                if (radio.checked) {
                    radio.closest('.custom-radio').classList.add('checked');
                    selectedIndex = idx;  // 선택된 값 저장
                }

                // 다음 버튼 활성화
                nextButton.disabled = false;
                nextButton.classList.add('btn_next_active');
                nextButton.classList.remove('btn_main_disable');
            });
        });
    }

    // 초기 질문 렌더링
    renderQuestion(currentQuestionIndex);

    // 이전 버튼 이벤트
    backButton.addEventListener('click', () => {
        if (currentQuestionIndex === 0) {
            window.location.href = 'test_1_name.html';
        } else {
            currentQuestionIndex--;
            renderQuestion(currentQuestionIndex);
        }
    });

    // 다음 버튼 이벤트 (여기서 점수 추가!)
    nextButton.addEventListener('click', () => {
        // 라디오 버튼 선택 여부 확인
        if (selectedIndex === null) {
            console.log('답변을 선택하세요.');
            return; // 선택된 라디오 버튼이 없으면 이벤트 종료
        }

        // 선택된 답변의 점수 가져오기
        const selectedChoice = questions[currentQuestionIndex].choices[selectedIndex];

        // 점수 계산 (여기서만 점수 추가!)
        ePoint += selectedChoice.ePoint;
        tPoint += selectedChoice.tPoint;
        kPoint += selectedChoice.kPoint;

        console.log('점수 업데이트:', ePoint, tPoint, kPoint);

        // 다음 질문으로 이동
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        } else {
            let resultType;

            if (tPoint > ePoint) {
                if (kPoint > 20) {
                    resultType = 'teto_male_1';
                } else if (kPoint > 10) {
                    resultType = 'teto_male_2';
                } else {
                    resultType = 'teto_male_3';
                }
            } else if (ePoint > tPoint) {
                if (kPoint > 20) {
                    resultType = 'egen_male_1';
                } else if (kPoint > 10) {
                    resultType = 'egen_female_2';
                } else {
                    resultType = 'egen_male_3';
                }
            } else {
                resultType = 'egen_male_3';
            }

            // 결과 페이지로 이동
            window.location.href = `result.html?type=${resultType}`;
        }
    });
});


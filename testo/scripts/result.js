document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName'); // 저장된 이름 가져오기
    const nameContainer = document.querySelector('.btn_name_result');

    const resultImage = document.getElementById('resultImage');
    resultImage.innerHTML = ''; // 기존 이미지 제거
    const styleImage = document.getElementById('styleImage');
    styleImage.innerHTML = ''; // 기존 이미지 제거

    if (userName && nameContainer) {
        nameContainer.textContent = userName; // 이름 표시
    } else {
        nameContainer.textContent = '유저 이름 없음'; // 이름이 없을 경우 기본값
    }

    const results = {
        teto_female_1: {
            image: '../assets/images/teto_female_1.png',
            title: '때로는 부드러운 모습도 보여주세요! 항상 강한 모습만 보여주기보다는 가끔은 부드러운 면모를 드러내는 것도 좋습니다. 영화를 보며 눈물을 흘리는 모습, 동물을 좋아하는 모습 등 의외의 반전 매력을 선사해보세요.',
            description: '리더십과 독립심이 강하며 자신감 넘치는 성격이에요. 털털하고 솔직한 성격으로, 힘든 일도 도맡아 하며 주변 사람들에게 의지가 되곤 해요. 자신의 강함을 드러내는 것을 좋아하며, 남다른 추진력으로 목표를 이뤄요. 다만 목소리가 크고 눈치가 없는 경우가 있어 주변 사람들이 가끔 힘들어하기도 해요. 햄버거, 돈가스, 제육볶음을 좋아하는 식성도 매력 포인트랍니다.',
            imageFit: 'assets/images/teto_female_style_1.png'
        },
        teto_female_2: {
            image: '../assets/images/teto_female_2.png',
            title: '재능을 공유하세요! 운동, 재테크 등 자신 있는 분야의 지식을 주변 사람들과 나누세요. 스터디 모임이나 멘토링 활동을 통해 리더십을 발휘하고, 사람들과 깊이 있는 관계를 맺을 수 있을 거예요.',
            description: '리더십을 발휘하거나 분위기를 주도하며, 자신만의 매력을 발산하는 타입이에요. 크로스핏이나 헬스 같은 격렬한 운동을 즐기는 활동적인 면모도 그녀의 큰 특징 중 하나예요. 비트코인, 부동산, 주식 등 다양한 주제에 관심을 가지고 대화를 나누는 데도 능숙해요. 이 때문에 남사친들과도 깊은 우정을 쌓는 경우가 많고, 여자들에게도 인기가 많은 편이에요..',
            imageFit: '../assets/images/teto_female_style_2.png'
        },
        teto_female_3: {
            image: '../assets/images/teto_female_3.png',
            title: '상대방의 의견을 존중하면서도, 자신의 생각을 분명하게 표현하세요! 솔직하고 당당한 모습은 상대방에게 매력적으로 다가갈 뿐만 아니라, 서로를 더 잘 이해할 수 있도록 도와줄 거예요.',
            description: '털털하고 쿨한 매력을 가지고 있는 게 가장 큰 특징이에요. 눈치가 빠르기 때문에 모든 상황을 쿨하게 넘기기 어려운 순간도 있지만, 겉으로는 강하고 당당한 모습을 유지하려해요. 그러나 속마음은 섬세한 면이 있어서 가끔 유리 멘탈이 드러날 때가 있어요. 특히 연애에서는 상대에게 너무 의지하지 않으려는 성향이 있으며 상대를 리드하는 모습을 보여줘요. ',
            imageFit: '../assets/images/teto_female_style_3.png'
        },
        egen_female_1: {
            image: '../assets/images/egen_female_1.png',
            title: '칭찬을 아끼지 마세요!  "오늘따라 예뻐 보이네" "멋진 옷 입었네"와 같이 칭찬은 사람들을 기분 좋게 만들고, 당신에게 호감을 느끼게 할 거예요. 칭찬할 때는 진심을 담아 표현하는 것이 중요해요.',
            description: '섬세하고 관계 중심적인 성격이에요. 외모와 사회적 이미지에 민감하며, 무리 속에서 조화롭게 지내려는 성향이 강해요. 배려 깊고 신중하며 때로 자신의 감정을 숨기는 경향도 보여요. 주로 사람들과 함께하는 것을 좋아하는 타입이에요. 몸매 관리에도 관심이 많으며 필라테스를 열심히 해요. 머릿결에 관심이 많으며 남녀노소 인기가 많아요.',
            imageFit: '../assets/images/egen_female_style_1.png'
        },
        egen_female_2: {
            image: '../assets/images/egen_female_2.png',
            title: '과감한 스타일링에 도전해 보세요!  유행을 따르기보다는 자신에게 어울리는 스타일을 찾고, 과감한 옷이나 액세서리로 개성을 표현하세요. 나만의 시그니처 스타일을 만들어 보세요.',
            description: '주변 사람들을 배려하며 무리 속에서 조화를 이루는 편이에요. 몸 만들기에 관심이 많으며 홈트를 즐겨해요. 개성을 중요시하며 자신의 매력을 드러내기 위해 과감한 옷을 입기도 해요. 공감력이 높으며 목소리가 크지 않아요. 연애에서는 적극적으로 대시하기 보다는 자연스럽게 만나는 것을 추구하는 타입이에요. ',
            imageFit: '../assets/images/egen_female_style_2.png'
        },
        egen_female_3: {
            image: '../assets/images/egen_female_3.png',
            title: '자신감을 가지세요! "나는 충분히 매력적인 사람이야" "나도 사랑받을 자격이 있어"라고 자신을 믿고 당당하게 행동하세요. 세상에 존재하는 모든 사람은 저마다의 아름다움과 특별함을 가지고 태어났답니다.',
            description: '분위기 있는 공간에 방문하는 것을 좋아하며, 친구들과 조화롭게 지내는 경향이 있어요. 자기 관리에 신경을 쓰지만 지나치게 과하지 않아요. 연애에 있어서는 소극적이게 보일 수 있지만 자신이 좋아하는 사람 앞에서는 적극적인 모습을 보여주는 강한 면모를 가지고 있어요. 강한 성격의 친구들이 좋아해서 함께 다니는 모습을 많이 볼 수 있어요. ',
            imageFit: '../assets/images/egen_female_style_3.png'
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const resultType = urlParams.get('type');

    console.log(resultType)
    if (results[resultType]) {
        const { image, title, description ,imageFit} = results[resultType];
        document.getElementById('resultImage').src = image;
        document.getElementById('resultDescription').textContent = description;
        document.getElementById('styleImage').src = imageFit;
        document.getElementById('resultTip').textContent = title;
    } else {
        console.error('결과 타입이 유효하지 않습니다.');
    }

    questionImageContainer.appendChild(questionImage);
    resultImage.appendChild(image);

    console.log('Image:', document.getElementById('resultImage').src);

    // 공유 버튼 클릭 이벤트
    document.getElementById('shareButton').addEventListener('click', () => {
        navigator.share({
            title: document.title,
            url: window.location.href,
        });
    });

    // 이미지 저장 버튼 클릭 이벤트
    document.getElementById('saveButton').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = document.getElementById('resultImage').src;
        link.download = 'result.png';
        link.click();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    let sharedUserName = urlParams.get("user"); // 공유된 닉네임 가져오기
    let localUserName = localStorage.getItem("userName"); // 기존에 입력한 닉네임 가져오기
    let resultType = urlParams.get("type"); // 현재 결과 유형 가져오기

    let finalUserName = localUserName || sharedUserName || "유저"; // 최종 닉네임 결정

    const nameContainer = document.querySelector(".btn_name_result");
    if (finalUserName) {
        nameContainer.textContent = finalUserName;
    } else {
        nameContainer.textContent = "유저 이름 없음";
    }

    const results = {
        teto_female_1: {
            image: '../assets/images/teto_female_1.png',
            title: '때로는 부드러운 모습도 보여주세요! 항상 강한 모습만 보여주기보다는 가끔은 부드러운 면모를 드러내는 것도 좋습니다. 영화를 보며 눈물을 흘리는 모습, 동물을 좋아하는 모습 등 의외의 반전 매력을 선사해보세요.',
            description: '리더십과 독립심이 강하며 자신감 넘치는 성격이에요. 털털하고 솔직한 성격으로, 힘든 일도 도맡아 하며 주변 사람들에게 의지가 되곤 해요. 자신의 강함을 드러내는 것을 좋아하며, 남다른 추진력으로 목표를 이뤄요. 다만 목소리가 크고 눈치가 없는 경우가 있어 주변 사람들이 가끔 힘들어하기도 해요. 햄버거, 돈가스, 제육볶음을 좋아하는 식성도 매력 포인트랍니다.',
            imageFit: '../assets/images/teto_female_style_1.png',
            imageStory: '../assets/images/teto_female_story_1.png',
            subtitle: '테토녀 : 테토 지수 上'
        },
        teto_female_2: {
            image: '../assets/images/teto_female_2.png',
            title: '재능을 공유하세요! 운동, 재테크 등 자신 있는 분야의 지식을 주변 사람들과 나누세요. 스터디 모임이나 멘토링 활동을 통해 리더십을 발휘하고, 사람들과 깊이 있는 관계를 맺을 수 있을 거예요.',
            description: '리더십을 발휘하거나 분위기를 주도하며, 자신만의 매력을 발산하는 타입이에요. 크로스핏이나 헬스 같은 격렬한 운동을 즐기는 활동적인 면모도 그녀의 큰 특징 중 하나예요. 비트코인, 부동산, 주식 등 다양한 주제에 관심을 가지고 대화를 나누는 데도 능숙해요. 이 때문에 남사친들과도 깊은 우정을 쌓는 경우가 많고, 여자들에게도 인기가 많은 편이에요..',
            imageFit: '../assets/images/teto_female_style_2.png',
            imageStory: '../assets/images/teto_female_story_2.png',
            subtitle: '테토녀 : 테토 지수 中'
        },
        teto_female_3: {
            image: '../assets/images/teto_female_3.png',
            title: '상대방의 의견을 존중하면서도, 자신의 생각을 분명하게 표현하세요! 솔직하고 당당한 모습은 상대방에게 매력적으로 다가갈 뿐만 아니라, 서로를 더 잘 이해할 수 있도록 도와줄 거예요.',
            description: '털털하고 쿨한 매력을 가지고 있는 게 가장 큰 특징이에요. 눈치가 빠르기 때문에 모든 상황을 쿨하게 넘기기 어려운 순간도 있지만, 겉으로는 강하고 당당한 모습을 유지하려해요. 그러나 속마음은 섬세한 면이 있어서 가끔 유리 멘탈이 드러날 때가 있어요. 특히 연애에서는 상대에게 너무 의지하지 않으려는 성향이 있으며 상대를 리드하는 모습을 보여줘요. ',
            imageFit: '../assets/images/teto_female_style_3.png',
            imageStory: '../assets/images/teto_female_story_3.png',
            subtitle: '테토녀 : 테토 지수 下'
        },
        egen_female_1: {
            image: '../assets/images/egen_female_1.png',
            title: '칭찬을 아끼지 마세요!  "오늘따라 예뻐 보이네" "멋진 옷 입었네"와 같이 칭찬은 사람들을 기분 좋게 만들고, 당신에게 호감을 느끼게 할 거예요. 칭찬할 때는 진심을 담아 표현하는 것이 중요해요.',
            description: '섬세하고 관계 중심적인 성격이에요. 자기 관리 열심히 하는 섬세한 타입이에요. 외모와 사회적 이미지를 잘 가꿔요. 배려 깊고 신중한 편이에요. 주로 사람들과 함께하는 것을 좋아하는 타입이에요. 몸매 관리에도 관심이 많으며 필라테스를 열심히 해요. 남녀노소 인기가 많으며 여자들에게도 인기가 많아요. 연애하면 완전 몰입하는 경우가 많아요.',
            imageFit: '../assets/images/egen_female_style_1.png',
            imageStory: '../assets/images/egen_female_story_1.png',
            subtitle: '에겐녀 : 에겐 지수 上'
        },
        egen_female_2: {
            image: '../assets/images/egen_female_2.png',
            title: '과감한 스타일링에 도전해 보세요!  유행을 따르기보다는 자신에게 어울리는 스타일을 찾고, 과감한 옷이나 액세서리로 개성을 표현하세요. 나만의 시그니처 스타일을 만들어 보세요.',
            description: '주변 사람들을 배려하며 무리 속에서 조화를 이루는 편이에요. 몸 만들기에 관심이 많으며 홈트를 즐겨해요. 개성을 중요시하며 자신의 매력을 드러내기 위해 과감한 옷을 입기도 해요. 공감력이 높으며 목소리가 크지 않아요. 연애에서는 적극적으로 대시하기 보다는 자연스럽게 만나는 것을 추구하는 타입이에요. ',
            imageFit: '../assets/images/egen_female_style_2.png',
            imageStory: '../assets/images/egen_female_story_2.png',
            subtitle: '에겐녀 : 에겐 지수 中'
        },
        egen_female_3: {
            image: '../assets/images/egen_female_3.png',
            title: '이성을 대할 때 지금보다 더 과감하고 당당하게 행동한다면 더 많은 사랑의 기회가 당신을 찾아올 거예요! 세상에 존재하는 모든 사람은 저마다의 아름다움과 특별함을 가지고 태어났답니다. "당신은 매력적인 사람! 훗"',
            description: '분위기 있는 공간에 방문하는 것을 좋아하며, 친구들과 조화롭게 지내는 경향이 있어요. 자기 관리에 신경을 쓰지만 지나치게 과하지 않아요. 연애에 있어서는 소극적이게 보일 수 있지만 자신이 좋아하는 사람 앞에서는 적극적인 모습을 보여주는 강한 면모를 가지고 있어요. 강한 성격의 친구들이 좋아해서 함께 다니는 모습을 많이 볼 수 있어요. ',
            imageFit: '../assets/images/egen_female_style_3.png',
            imageStory: '../assets/images/egen_female_story_3.png',
            subtitle: '에겐녀 : 에겐 지수 下'
        },
        teto_male_1: {
            image: '../assets/images/teto_male_1.png',
            title: '주도적인 성격은 연인에게 신뢰감을 줄 수 있으니, 가끔은 상대의 의견에 귀를 기울이며 균형감을 유지해 보세요! 열정적이고 목표 지향적인 모습을 자연스럽게 보여주는 것만으로도 큰 매력이 된답니다. ',
            description: '단순하고 직설적인 성격으로, 자신만의 기준과 열정을 가지고 있어요. 자기 계발과 책임감을 중요하게 여기며, 주위 사람들에게 신뢰를 주기도 해요. "내 사람 최고”라며 팔이 안으로 굽는 성향이 강해요. 눈치가 없지만 연애에서는 리드하는 역할을 맡아요. 헬창인 경우가 많으며 먹성이 좋고 에너지가 넘치며, 돈까스와 제육을 제일 좋아해요. ',
            imageFit: '../assets/images/teto_male_style_1.png',
            imageStory: '../assets/images/teto_male_story_1.png',
            subtitle: '테토남 : 테토 지수 上'
        },
        teto_male_2: {
            image: '../assets/images/teto_male_2.png',
            title: '대화 중에는 상대의 말에 공감과 피드백을 더해, 섬세한 면모를 어필해 보세요! 때때로 드러나는 다정한 말투과 운동 외의 자기 관리하는 모습을 보여준다면 바로 인기 킹 등극 가능해요.',
            description: '자신이 옳다고 생각하며 목표를 향해 나아가는 면이 있어요.  성공이나 돈 그리고 운동에 관심이 많아요. 외적인 자기관리에는 큰 관심을 두지 않고 실속 있는 삶을 중시해요. 주변에 남자인 친구들이 많아요. 공감력이 조금 부족해 때때로 여자친구가 섭섭해하기도 하지만, 연애에서는 주도적인 타입으로 주로 고백을 해요. ',
            imageFit: '../assets/images/teto_male_style_2.png',
            imageStory: '../assets/images/teto_male_story_2.png',
            subtitle: '테토남 : 테토 지수 中'
        },
        teto_male_3: {
            image: '../assets/images/teto_male_3.png',
            title: '상대방의 의견을 존중하면서도, 자신의 생각을 분명하게 표현하세요! 솔직하고 당당한 모습은 상대방에게 매력적으로 다가갈 뿐만 아니라, 서로를 더 잘 이해할 수 있도록 도와줄 거예요.',
            description: '털털하고 쿨한 매력을 가지고 있는 게 가장 큰 특징이에요. 눈치가 빠르기 때문에 모든 상황을 쿨하게 넘기기 어려운 순간도 있지만, 겉으로는 강하고 당당한 모습을 유지하려해요. 그러나 속마음은 섬세한 면이 있어서 가끔 유리 멘탈이 드러날 때가 있어요. 특히 연애에서는 상대에게 너무 의지하지 않으려는 성향이 있으며 상대를 리드하는 모습을 보여줘요. ',
            imageFit: '../assets/images/teto_male_style_3.png',
            imageStory: '../assets/images/teto_male_story_3.png',
            subtitle: '테토남 : 테토 지수 下'
        },
        egen_male_1: {
            image: '../assets/images/egen_male_1.png',
            title: '독특한 감수성과 취향을 상대와 공유하며, 공감대를 만들어보는 것이 당신의 매력이에요! 여기에 약간의 적극성을 더한다면 인기 폭팔 예정일지도 몰라요.',
            description: '외모와 옷에 많은 투자를 하는 스타일이에요. 브랜드나 트렌드에 민감하며, 자기 관리를 철저히하는 성향을 가지고 있어요. 독특한 감수성을 가진 사람이랍니다. 연인에게는 다소 소극적인 면모를 보이며 리드 당하고 싶은 마음이 강해요. 음악 취향이 뚜렷하며 여사친이 많아서 “누나 있냐"는 이야기를 자주 듣곤 해요.',
            imageFit: '../assets/images/egen_male_style_1.png',
            imageStory: '../assets/images/egen_male_story_1.png',
            subtitle: '에겐남 : 에겐 지수 上'
        },
        egen_male_2: {
            image: '../assets/images/egen_male_2.png',
            title: '특별한 이벤트를 준비하세요!  생일, 기념일 등 특별한 날에는 꽃 선물, 깜짝 이벤트 등으로 상대방을 감동시켜 주세요. 특별한 날, 특별한 이벤트로  사랑하는 사람에게 잊지 못할 추억을 선물하세요!',
            description: '자기 관리에 관심이 있으며 트렌드를 즐기는 타입이에요. 사람들과 어울리는 것을 좋아하며 대화할 때 상대방을 생각하는 섬세함을 보여줘요. 청소를 좋아하고 옷을 깔끔하게 입고다니는 특징이 있어요. 신중한 면모가 있어 실행하는 데 조금 시간이 걸리지만 결과물의 완성도가 높은 특징이 있답니다. 로맨틱하고 진중한 연애를 꿈꾸기도 해요.',
            imageFit: '../assets/images/egen_male_style_2.png',
            imageStory: '../assets/images/egen_male_story_2.png',
            subtitle: '에겐남 : 에겐 지수 中'
        },
        egen_male_3: {
            image: '../assets/images/egen_male_3.png',
            title: '패션이나 외모 관리를 너무 과하지 않게 하면서도, 자신만의 깔끔함을 유지해보세요. 지금의 적극성도 좋지만 아주 조금 더 용기낸다면 2025년에는 정말 따뜻하게 지낼 수 있어요!',
            description: '패션이나 외모 관리에 약간의 관심을 가지지만, 귀찮은 걸 싫어해 그다지 신경 쓰지 않는 편이에요. 눈치가 빠르고 주변 분위기를 잘 살피는 특징을 가지고 있어요. 여사친, 남사친을 고루고루 만나요. 상황에 따라 연애할 때 리드하기도 리드 당하기도 해요. 때때로 엄마처럼 자신을 챙겨주는 사람에게 끌리기도 해요. ',
            imageFit: '../assets/images/egen_male_style_3.png',
            imageStory: '../assets/images/egen_male_story_3.png',
            subtitle: '에겐남 : 에겐 지수 下'
        }
    };

    if (results[resultType]) {
        const { image, title, description, imageFit, imageStory, subtitle } = results[resultType];

        document.getElementById("resultImage").src = image;
        document.getElementById("resultDescription").innerText = description;
        document.getElementById("styleImage").src = imageFit;
        document.getElementById("resultTip").textContent = title;
        document.getElementById("subTitle").textContent = subtitle;

        document.getElementById("saveButton").addEventListener("click", () => {
            console.log("이미지 저장 버튼 클릭!");

            const canvas = document.getElementById("resultCanvas");
            const ctx = canvas.getContext("2d");

            const bgImage = new Image();
            bgImage.crossOrigin = "anonymous";
            bgImage.src = imageStory;

            bgImage.onload = function () {
                canvas.width = bgImage.width;
                canvas.height = bgImage.height;
                ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

                const text = `${finalUserName}님의 에겐/테토 유형 결과는?`;

                ctx.font = "900 30.6px Pretendard";
                ctx.textAlign = "center";
                ctx.fillStyle = "#222";
                ctx.lineHeight = 1.5;

                const textWidth = ctx.measureText(text).width;
                const padding = 30;
                const boxWidth = textWidth + padding * 2;
                const boxHeight = 66;
                const boxX = (canvas.width - boxWidth) / 2;
                const boxY = 49;

                const gradient = ctx.createLinearGradient(boxX, boxY, boxX, boxY + boxHeight);
                gradient.addColorStop(0.0, "rgba(240, 240, 240, 0.9)"); // 위쪽 그림자
                gradient.addColorStop(0.02, "rgba(250, 250, 250, 1)"); // 중앙 투명
                gradient.addColorStop(0.1, "rgba(255, 255, 255, 1)"); // 중앙 투명
                gradient.addColorStop(0.5, "rgba(255, 255, 255, 1)"); // 중앙 투명
                gradient.addColorStop(0.9, "rgba(255, 255, 255, 1)"); // 중앙 투명
                gradient.addColorStop(0.97, "rgba(240, 240, 240, 1)"); // 중앙 투명
                gradient.addColorStop(1.0, "rgba(230, 230, 230, 0.8)"); // 아래쪽 그림자
                
                ctx.fillStyle = gradient;
                ctx.strokeStyle = "#ada9a9";
                ctx.lineWidth = 0.3;
                ctx.shadowColor = "rgba(139, 138, 138, 0.1)";
                ctx.shadowBlur = 7.7;
                ctx.shadowOffsetX = -1;
                ctx.shadowOffsetY = 3;

                ctx.beginPath();
                ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 50);
                ctx.fill();
                ctx.stroke();

                ctx.shadowColor = "transparent";
                ctx.fillStyle = "#222";
                ctx.fillText(text, canvas.width / 2, boxY + boxHeight / 2 + 10);

                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "result.png";

                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) {
                    alert("새 창에서 이미지를 길게 눌러 저장해주세요!");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            };

            bgImage.onerror = function () {
                console.error("배경 이미지 로드 실패: " + imageStory);
                alert("이미지를 불러오는 데 실패했습니다. 다시 시도해주세요.");
            };
        });
    }

    // ✅ **결과 공유 버튼 클릭 이벤트 (URL에 type 값 포함)**
    document.getElementById("shareButton").addEventListener("click", () => {
        let currentUserName = localStorage.getItem("userName") || "테스트";
        let currentUrl = `${window.location.origin}${window.location.pathname}?type=${resultType}&user=${encodeURIComponent(currentUserName)}`;

        navigator.clipboard.writeText(currentUrl)
            .then(() => alert("결과 링크가 복사되었습니다!"))
            .catch(err => console.error("복사 실패:", err));
    });

    // ✅ **테스트 공유 버튼 클릭 이벤트 (index.html 링크)**
    document.getElementById("testButton").addEventListener("click", () => {
        const indexUrl = `${window.location.origin}/index.html`;
        navigator.clipboard.writeText(indexUrl)
            .then(() => alert("테스트 링크가 복사되었습니다!"))
            .catch(err => console.error("복사 실패:", err));
    });
});

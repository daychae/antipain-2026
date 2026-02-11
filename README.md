# Dental Comm App (치과 진료 소통 앱) https://daychae.github.io/antipain-2026/

치과 진료 중 말을 하기 어려운 환자가 의료진과 원활하게 소통할 수 있도록 돕는 웹 애플리케이션입니다. 터치 한 번으로 의사를 표현하고, 음성 합성(TTS) 기능을 통해 메시지를 전달합니다.

## ✨ 주요 기능

*   **비상 정지 (STOP)**: 위급 상황 시 의료진에게 즉시 중단을 요청합니다. (화면 붉은색 점멸 효과 포함)
*   **빠른 의사 표현**: 자주 사용하는 표현을 버튼으로 제공합니다.
    *   😷 아파요 (Pain)
    *   💧 물이 필요해요 (Water)
    *   💨 석션 해주세요 (Suction)
    *   🛑 잠시 쉬고 싶어요 (Break)
*   **추가 질문**: 진료 진행 상황에 대한 질문이나 상태를 표현합니다.
    *   ⏳ 얼마나 남았나요? (How Long?)
    *   👌 괜찮아요 (I'm OK)
*   **직접 입력**: 제공된 버튼 외에 하고 싶은 말을 직접 입력하여 음성으로 전달할 수 있습니다.
*   **시각적 피드백**: 버튼 클릭 시 화면이 깜빡이며 시각적으로도 의사를 전달합니다.
*   **음성 안내 (TTS)**: Web Speech API를 사용하여 선택한 메시지를 음성으로 출력합니다.

## 🛠 기술 스택

*   **HTML5 structure**: 시맨틱 태그 사용
*   **CSS3**: Modern CSS (Variables, Flexbox/Grid, Glassmorphism 효과)
*   **JavaScript (Vanilla)**: Web Speech API (TTS), DOM 조작

## 📜 버전 기록 (Version History)

### v1.0.0 (2026-02-11)
*   **초기 버전 출시 (Initial Release)**
*   기본 UI 및 디자인 시스템(Glassmorphism) 적용
*   음성 합성(TTS) 기능 구현 (English 음성 지원)
*   긴급 정지 및 주요 의사소통 버튼 기능 추가
*   사용자 직접 입력(Keyboard) 모달 및 기능 구현
*   모바일 환경(iOS/Android)에서의 오디오 컨텍스트 활성화 로직 추가
*   S3 배포 준비 완료 (index.html, styles, scripts 분리)

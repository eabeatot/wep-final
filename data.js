import img0 from './img/0.jpg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpg'
import img11 from './img/11.jpg'

let data = [
    {
        id: 0,
        title: '모든 삶은 흐른다',
        author: '로랑스 드빌레르',
        img: <img src={img0} alt='img0' />,
        sentence: '"잔잔하면서도 거칠고,\n당장 와 닿을 것 같으면서도 금세 멀어지는\n고요하되 강한 존재감을 드러내는 바다\n그곳에서 인생의 진짜 철학을 발견하다."',
        content: '바다의 물결만큼 자연스러운 움직임은 없고, 대륙을 둘러싼 바다만큼 커다란 생명줄은 없다. 선원들의 용기, 변함없이 밝은 등대의 불빛, 계속 헤엄치는 상어의 힘, 한시도 같은 모습을 보이지 않는 거친 파도까지. 살아 숨 쉬는 철학인 바다는 존재 그 자체로 우리에게 감동을 안겨주며, 깊은 지혜와 생각지도 못한 인생철학을 가르쳐준다.',
        like: '★★★★★',
        hovertext: '"이 책은 낯선 인생이라는\n항해를 떠나는 당신에게\n위로와 용기를 줄 것이다."',
        hovering: false
    },
    {
        id: 1,
        title: '원씽 THE ONE THING',
        img: <img src={img1} alt='img1' />,
        author: '게리 켈러, 제이 파파산',
        sentence: '"여러 가지 일을 다 한다는 것은,\n한 개도 제대로 하지 못하는 것과 같다!"',
        content: '이 책은 성공을 가로막고, 계획을 좌절시키는 거짓말들이 무엇인지 보여 줌.그리고 ‘단 하나’(The One Thing)를 통해 완벽하게 새로운 전략을 제안함. 일하는 방식, 선택하는 방식, 그리고 성과를 내는 방식 그 모든 부분에서 이 책은 획기적인 변화를 선사할 것임.',
        like: '★★★★★',
        hovertext: '"성공은 도미노 처럼 작동한다.\n우선순위에 따라 살아라.\n생산성에 따라 살아라.\n크게 생각해라."',
        hovering: false

    },
    {
        id: 2,
        title: '떨림과 울림',
        author: '김상욱',
        img: <img src={img2} alt='img2' />,
        sentence: '"138억 년 전 그날 이후, 탄생한 모든 것들\n시간과 공간, 빛과 모든 물질\n그렇게 우리는 우리가 되었다."',
        content: '『떨림과 울림』은 빛, 시공간, 원자, 전자부터 최소작용의 원리, 카오스, 엔트로피, 양자역학, 단진동까지 물리에서 다루는 핵심 개념들을 차분히 소개하면서 ‘물리’라는 새로운 언어를 통해 우리 존재와 삶, 죽음의 문제부터 타자와의 관계, 세계에 관한 생각까지 새로운 틀에서 바라볼 수 있게 안내한다. 물리학자가 원자로 이루어진 세계를 보는 방식은 마치 동양철학의 경구를 읽는 듯하다. 나의 존재를 이루는 것들은 어디에서 시작되었는지, 죽음을 어떻게 성찰할 수 있을지, 타자와 나의 차이는 무엇인지. 엄밀한 과학의 정답을 제시하는 대신 물리학자만이 안내할 수 있는 새로운 시선을 제시해준다.',
        like: '★★★★★',
        hovertext: '"물리학자 김상국이 바라본\n우주와 세계 그리고 우리."',
        hovering: false

    },
    {
        id: 3,
        title: '조셉 머피 부의 초월자',
        author: '조셉 머피',
        img: <img src={img3} alt='img3' />,
        sentence: '"돈에 얽매인 삶에서 해방돼 부의 초월자가 되어라."',
        content: '조셉 머피 부의 초월자』는 부(富)와 잠재의식에 관한 그의 모든 지식과 통찰이 총망라된 최신 개정판으로서, 총 5권의 ‘조셉 머피 시리즈’ 중 첫 번째 책이다. 특히 이번 시리즈는 조셉 머피 재단에서 인정받은 유일한 공식 저서이며, 펭귄 위즈덤 하우스에서 출간한 10권을 각각 주제별로 묶어 재편집한 것이다. 21세기의 감성을 반영하기 위해 고전을 개정한 이번 조셉 머피 시리즈는 번역부터 편집까지 1년 이상 걸려 공들여 만든 국내 최초 완역본으로, 인생에 부가 들어오는 것을 가로막는 물질적·정신적·감정적 장벽을 극복하는 열쇠를 건네준다.',
        like: '★★★★★',
        hovertext: '"전 세계 \n수백만 부자들은\n왜\n이 책들을 60년 동안 읽어왔을까?"',
        hovering: false
    },
    {
        id: 4,
        title: '끈기보다 끊기',
        author: '유영만',
        img: <img src={img4} alt='img4' />,
        sentence: '"그동안 끈기가 용기로 해석되었다면\n지금부터는 끊기가 진정한 용기로 작동할 것이다.\n이제 끈기로 이어지는 성장은 여기서 멈추고,\n끊기로 이어가는 행복한 성숙을 만들어가야 할 때다."',
        content: '문득 찾아온 경제 빙하기를 멍하니 바라만 보지 말고 아직도 늦지 않았으니 일단 바닥으로 내려가 지나온 시절을 정리하고 점검하는 시간을 가져보자. 서로가 서로에게 따듯한 희망의 체온을 나누면서 혹한기를 극복해내는 펭귄의 연대처럼, 우리도 난국을 극복할 수 있다는 가능성에 서로를 힘껏 보듬어 안아보자. 그렇게 스스로에게, 그리고 서로에게 위로의 메시지를 던져보자. \n《끈기보다 끊기》가 그 메시지다. 지금, 위기라고 느끼는 사람들, 위로가 필요한 사람들에게 이 책은 분명 과감히 바닥을 치고 다시 솟구치는 힘을 전해줄 것이다.',
        like: '★★★★☆',
        hovertext: '"성공은\n역설적이게도\n포기로부터 시작된다."',
        hovering: false
    },
    {
        id: 5,
        title: '담론',
        author: '신영복',
        img: <img src={img5} alt='img5' />,
        sentence: '"한 시대, 한 지성의 삶과 철학이 오롯이 담긴 책"',
        content: '저자가 동양고전을 공부의 텍스트로 삼은 이유는 무엇보다 동양고전이 갖고 있는 풍부한 사상들이 세계 인식의 핵심이 되기 때문이다. 동양 사상이 갖고 있는 조화와 균형감, 그리고 과거를 성찰하고 미래를 전망하는 뛰어난 관점은 세계를 올바르게 이해하는 유연한 틀이 된다. 현재 우리 사회의 여러 양태들과 결합되어 현재의 문맥으로 새롭게 읽어낸 동양고전을 직접 확인해보자.',
        like: '★★★★☆',
        hovertext: '"한 시대, 한 지성의\n세계인식과 성찰을\n오롯이\n담아내다"',
        hovering: false
    },
    {
        id: 6,
        title: '미움받을 용기',
        author: '기시미 이치로 , 고가 후미타케',
        img: <img src={img6} alt='img6' />,
        sentence: '"인생의 모든 고민은 인간관계에서 비롯된다.\n타인에게 미움받는 것을 두려워하지 마라.\n모든것은 용기의 문제다."',
        content: '인간은 능력이나 환경, 과거의 트라우마와 관계없이 얼마든지 변할 수 있는 존재이며, 이를 위해서는 현재의 나를 있는 그대로 받아들이고 눈앞에 놓인 문제를 직시할 ‘용기’가 필요하다고 말한다. 이 책은 자유로워질 용기, 평범해질 용기 그리고 ‘미움받을 용기’까지, 자유롭고 행복한 삶을 위한 아들러의 가르침을 ‘철학자와 청년의 대화’ 형식으로 엮어, ‘어떻게 행복한 인생을 살 것인가?’라는 인간 본연의 질문에 쉽고 명쾌한 해답을 제시해준다.',
        like: '☆☆☆☆☆',
        hovertext: '"왜 당신은 변하지 않는가?\n왜 당신은 타인의 인생을 사는가?\n왜 당신은\n지금 행복을 느끼지 못한는가?"',
        hovering: false
    },
    {
        id: 7,
        title: '디 에센셜: 죄와 벌',
        author: '표도르 도스토옙스키',
        img: <img src={img7} alt='img7' />,
        sentence: '"어서 알고 싶었어요.\n다른 사람들 처럼 내가 <이>인가, \n아니면 인간인가를 말이죠.\n내가 선을 뛰어넘을 수 있는가, \n아니면 넘지 못하는가."',
        content: '가난한 대학생 라스콜니코프의 범죄를 통해 죄와 벌의 심리적 과정을 밝힐 뿐만 아니라 죄와 인간 본성의 문제, 선과 악, 신과 인간, 사회적 환경과 인간 범죄의 상관성, 혁명적 사상의 실제 등을 다루며 사회적, 정치적 문제와 더불어 도덕과 윤리 같은 형이상학적인 문제를 폭넓게 파고든다.',
        like: '☆☆☆☆☆',
        hovertext: '"“나는 그저\n 이[蝨]를 죽였을 뿐이야,\n 아무 쓸모도 없고 \n더럽고 해롭기만 한 \n이[蝨]를.”"',
        hovering: false
    },
    {
        id: 8,
        title: '총 균 쇠',
        author: '재레드 다이아몬드',
        img: <img src={img8} alt='img8' />,
        sentence: '"왜 어떤 국가는 부유하고 \n어떤 국가는 가난한가?"',
        content: '왜 어떤 국가는 부유하고 어떤 국가는 가난한가? 왜 어떤 민족은 다른 민족의 정복과 지배의 대상이 되었는가? 아메리카, 아프리카, 오스트레일리아 원주민이 아니라 유라시아인이 세계의 부와 힘을 차지한 이유는 무엇인가? 《총, 균, 쇠》는 생물학, 지리학, 인류학, 역사학, 언어학 등 다양한 학문의 융합을 통해 장대한 인류사를 풀어내며 오늘날 현대 세계가 불평등한 원인을 종합 규명한다.',
        like: '☆☆☆☆☆',
        hovertext: '"문명의 생성과 번영의\n수수께끼를 밝혀낸\n현대의 고전."',
        hovering: false
    },
    {
        id: 9,
        title: '침묵의 봄',
        author: '레이첼 카슨',
        img: <img src={img9} alt='img9' />,
        sentence: '“노래하던 새들은 갑작스럽게 사라졌고, \n그들이 우리에게 가져다 주던 화려한 생기와 아름다움과 감흥도 \n우리가 모르는 사이에 너무도 빨리 사라져버렸다.\n 지금 우리에게 필요한 것은 겸손이다. 자만심이 자리 잡을 여지는 어디에도 없다.”',
        content: '무분별한 살충제 사용으로 파괴되는 야생 생물계의 모습을 적나라하게 공개하여, 생태계의 오염이 어떻게 시작되고 생물과 자연환경에 어떤 영향을 미치지는 지 구체적으로 설명하였다. 이를 통해 정부와 살충제 제조업체의 행태를 지적하고, 환경문제에 대한 대중들의 생각을 환기시킬 수 있는 기회를 제시하였다.',
        like: '☆☆☆☆☆',
        hovertext: '"우리의 행동에 대한 결과를\n 감당할 수 있는가? \n거만한 인간이여,"',
        hovering: false
    },
    {
        id: 10,
        title: '역행자',
        author: '자청',
        img: <img src={img10} alt='img10' />,
        sentence: '"농장에 있는 닭을 보라.\n이들에게 자유의지가 있다고\n말할 수 있을까?"',
        content: '95퍼센트의 인간은 타고난 유전자와 본성의 꼭두각시로 살아간다. 이들은 평생 돈, 시간, 운명에게 속박되어, 평범함을 벗어나지 못하고 불행하게 사는 ‘순리자’다. 그러나 5퍼센트의 인간은 다르다. 이들은 타고난 유전자의 본성을 역행해 돈, 시간, 운명으로부터 완전한 자유를 얻는다. 본성을 거슬러 행복을 쟁취하는 이들이 바로 ‘역행자’다.',
        like: '☆☆☆☆☆',
        hovertext: '"죽을 때까지 순리자고 살고 싶은가?\n그렇다면 절대로 읽지 마라,"',
        hovering: false
    },
    {
        id: 11,
        title: '스즈메의 문단속',
        author: '신카이 마코토',
        img: <img src={img11} alt='img11' />,
        sentence: '"이 근처에 폐허 없니?\n문을 찾고 있어."',
        content: '규슈의 조용한 마을에서 이모와 함께 살아가는 17살 소녀 스즈메. 어느 날 등굣길에 아름다운 청년과 스쳐간 스즈메는 “문을 찾고 있다”는 그의 뒤를 쫓아 산속 폐허에 들어선다. 그곳에서 스즈메가 발견한 것은 붕괴에서 빗겨난 듯 덩그러니 남겨진 낡고 하얀 문. 무언가에 이끌리듯 스즈메는 문을 향해 손을 뻗는데…',
        like: '☆☆☆☆☆',
        hovertext: '"夢見ることができれば、\nそれは実現できる。"',
        hovering: false
    },
]

export default data;



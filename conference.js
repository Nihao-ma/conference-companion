/**
 * ╔══════════════════════════════════════════════════════╗
 * ║          CONFERENCE COMPANION — 會議設定檔           ║
 * ║  每次換會議只需要更新這一個檔案，其餘全部保持不動    ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * 當前會議：ESHG 2026
 * 地點：哥特堡，瑞典
 * 日期：2026年6月13–16日
 */

window.CONFERENCE_CONFIG = {

  // ── 基本資訊 ──────────────────────────────────────────
  name:       "ESHG 2026",
  subtitle:   "歐洲人類遺傳學大會・哥特堡 Gothenburg, Sweden",
  shortLabel: "ESHG 2026 哥特堡",
  dates:      "2026年6月13–16日",
  location:   "Svenska Mässan，哥特堡，瑞典",
  startDate:  "2026-06-13T08:00:00+02:00",  // ISO 8601，含時區

  // ── Google Drive 儲存設定 ─────────────────────────────
  // Drive 資料夾名稱（每次大會使用獨立資料夾，舊會議資料永久保留）
  driveFolderName: "ESHG2026",
  notesFileName:   "eshg2026_notes.json",

  // ── 報到時間 ──────────────────────────────────────────
  registrationTimes: [
    "6/12（五）14:00–18:00",
    "6/13（六）07:30–20:15",
    "6/14（日）08:00–19:00",
    "6/15（一）08:00 起",
  ],

  // ── 重要連結 ──────────────────────────────────────────
  links: [
    ["完整議程",      "https://2026.eshg.org/programme-at-a-glance-local/"],
    ["Session表",    "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme"],
    ["企業衛星場次", "https://2026.eshg.org/satellite-meetings/corporate-sessions/"],
    ["講者名單",     "https://2026.eshg.org/programme-at-a-glance-local/speakers/"],
    ["官方 App",     "https://itunes.apple.com/app/european-soc-of-human-genetic/id1390551688"],
  ],

  // ── Google 地圖 ───────────────────────────────────────
  mapsUrl: "https://maps.google.com/?q=Svenska+Massan+Gothenburg",
  venue:   "Svenska Mässan，Mässans gata 24, 412 51 Gothenburg",

  // ── AI 自動更新設定 ───────────────────────────────────
  // 抓取的官方網站（最多2個）
  updateUrls: [
    "https://2026.eshg.org/programme-at-a-glance-local/",
    "https://2026.eshg.org/programme-at-a-glance-local/speakers/",
  ],
  // 要特別追蹤的場次（給 AI 分析用）
  keySessionsDesc: "S13細胞遺傳學2.0（週一08:30）、I17結構染色體變異（週一17:00）、I18生殖攜帶者篩查（週一17:00）、S23產前檢測的未來（週二09:00）、I01 Episignatures（週六08:30）",
  // 使用者的專科身份（給 AI 分析用）
  specialistProfile: "OB/GYN產前診斷醫師",

  // ── 出發前自動更新時間點 ──────────────────────────────
  checkpoints: [
    { key: "w1", label: "出發前一週", days: 7, icon: "📅" },
    { key: "d3", label: "出發前三天", days: 3, icon: "📋" },
    { key: "d1", label: "出發前一天", days: 1, icon: "🔔" },
  ],

  // ── 個人備忘提醒 ──────────────────────────────────────
  personalReminders: [
    "週一 S13 細胞遺傳學2.0 — 細胞遺傳主持人考試備考重點",
    "週一 I17 結構性染色體變異 — 與考試內容直接相關",
    "週二 S23 產前檢測的未來 — 全程必到，不可讓步",
    "週一 I18 攜帶者篩查 — 對安安婦幼中心業務有參考價值",
    "建議主動聯繫：Arianna Tucci、Erik Sistermans",
  ],

  // ── 天數標籤 ──────────────────────────────────────────
  days: {
    sat: "週六 6/13",
    sun: "週日 6/14",
    mon: "週一 6/15",
    tue: "週二 6/16",
  },

  // ══════════════════════════════════════════════════════
  // ── 完整議程（四天）────────────────────────────────────
  // ══════════════════════════════════════════════════════
  // tags 說明：
  //   "star"    = ⭐ 推薦（個人重點）
  //   "prenatal"= 🧬 產前診斷相關
  //   "cyto"    = 🔬 細胞遺傳學相關
  // b（badge 類型）：edu / sym / con / int / pl / corp / soc
  sessions: {

    // ── 週六 6/13 ─────────────────────────────────────────
    sat: [
      { time: "08:30–10:00", items: [
        { id: "s_i01", b: "int", l: "互動", title: "I01 Episignatures：超越二元分類的臨床與產前應用",
          tags: ["star","prenatal"],
          speakers: ["Hans Björnsson (Iceland)","Arianna Tucci (UK)"],
          detail: "DNA甲基化表觀遺傳特徵在超越二元分類框架中的臨床潛力，包含長讀長定序（LRS）最新進展以及產前診斷應用前景。產前診斷必看！",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "s_e01", b: "edu", l: "教育", title: "E01 臨床基因組策展（變異分類）",
          tags: ["star"],
          speakers: ["Ahmad Abou Tayoun (UAE)","Ellen McDonagh (UK)"],
          detail: "ACMG/AMP變異分類框架更新、ClinGen策展標準與實際案例討論。建立細胞遺傳學實驗室品管流程的直接參考。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "s_s01", b: "sym", l: "研討", title: "S01 從GWAS尋找效應基因",
          tags: ["star"],
          speakers: ["Len Pennacchio (USA)","Hilary Finucane (USA)"],
          detail: "從GWAS位點利用功能基因組學、eQTL分析、CRISPR篩選識別因果效應基因的最新策略。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "s_s02", b: "sym", l: "研討", title: "S02 X染色體新發現：跨物種比較視角",
          tags: ["cyto"],
          speakers: ["Joost Gribnau (NL)","Tuuli Lappalainen (SE)"],
          detail: "X染色體失活、劑量補償機制的跨物種比較研究。細胞遺傳學相關。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "10:00–10:30", brk: "☕ 咖啡休息・海報張貼・展覽" },
      { time: "10:30–12:00", items: [
        { id: "s_c01", b: "con", l: "並行", title: "C01–C07 並行場次",
          tags: [], speakers: [],
          detail: "產前/不孕、智能障礙、生物資訊、癌症基礎、心臟基因、感覺器官、基因組醫學對公衛影響。詳細題目請查大會APP。",
          link: "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme" },
      ]},
      { time: "13:40–16:00", items: [
        { id: "s_pl12", b: "pl", l: "全體", title: "PL1–2 開幕全體大會・Leena Peltonen 獎講",
          tags: ["star"],
          speakers: ["ESHG主席","Leena Peltonen獎得主"],
          detail: "13:40 開幕致詞 / 14:00 Leena Peltonen獎講 / 14:15 開幕全體大會演講。大會最重要開場儀式，不宜錯過。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "17:00–18:30", items: [
        { id: "s_pl3", b: "pl", l: "全體", title: "PL3「有什麼新鮮事？」重點摘要場次",
          tags: ["star"],
          speakers: ["精選自投稿摘要"],
          detail: "從大會投稿中精選最具突破性研究成果進行口頭發表。掌握本年度最新動態的最佳管道。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "20:15–21:45", items: [
        { id: "s_mix", b: "soc", l: "社交", title: "🥂 開幕交流派對",
          tags: [], speakers: [],
          detail: "大會官方交流派對，認識國際同行的最佳機會。建議攜帶名片主動交流。",
          link: "https://2026.eshg.org/myconference/official-events/" },
      ]},
    ],

    // ── 週日 6/14 ─────────────────────────────────────────
    sun: [
      { time: "08:30–10:00", items: [
        { id: "u_e02", b: "edu", l: "教育", title: "E02 AI用於功能基因組學與遺傳關聯分析",
          tags: ["star"],
          speakers: ["Oliver Stegle (DE)","Julien Gagneur (DE)"],
          detail: "深度學習預測調控元件、AI輔助剪接變異預測、多模態基因組數據整合。了解AI如何改變基因組醫學實踐。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "u_i04", b: "int", l: "互動", title: "I04 長讀長定序入門",
          tags: ["star","cyto"],
          speakers: ["Adam Phillippy (USA)","Lars Feuk (SE)"],
          detail: "PacBio HiFi / Oxford Nanopore原理與臨床轉化。聚焦結構性變異偵測、重複序列解析、相位分析（phasing）。細胞遺傳學實驗室未來技術布局參考！",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "u_s05", b: "sym", l: "研討", title: "S05 重複序列擴增：被低估的疾病根源",
          tags: ["cyto"],
          speakers: ["Rosa Rademakers (BE)","Sarah Weckhuysen (BE)"],
          detail: "串聯重複序列擴增在神經疾病中的作用，以及長讀長定序在偵測傳統短讀長定序無法識別變異中的革命性角色。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "u_s07", b: "sym", l: "研討", title: "S07 多基因評分：臨床實施是否已準備好？",
          tags: ["star"],
          speakers: ["Danielle Posthuma (NL)","Nina Mars (FI)"],
          detail: "多基因風險評分跨族群適用性、臨床效用評估、醫療系統整合挑戰的重要政策討論。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "10:00–10:30", brk: "☕ 咖啡休息・海報自由參觀" },
      { time: "10:30–12:00", items: [
        { id: "u_c15", b: "con", l: "並行", title: "C15–C21 並行場次",
          tags: [], speakers: [],
          detail: "多場並行口頭報告。請至大會APP查詢具體題目與講者。",
          link: "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme" },
      ]},
      { time: "17:00–18:30", items: [
        { id: "u_c22", b: "con", l: "並行", title: "C22–C28 晚間並行場次",
          tags: [], speakers: [],
          detail: "晚間口頭報告。具體場次請至大會APP查詢。",
          link: "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme" },
      ]},
    ],

    // ── 週一 6/15 ─────────────────────────────────────────
    mon: [
      { time: "08:30–10:00", items: [
        { id: "m_e04", b: "edu", l: "教育", title: "E04 AI基因組學的ELSI（倫理、法律、社會議題）",
          tags: ["star"],
          speakers: ["Kelly Ormond (CH)","Eva Winkler (DE)"],
          detail: "算法公平性、基因隱私、知情同意、責任歸屬。建立符合倫理的AI輔助診斷流程的直接指引。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "m_i12", b: "int", l: "互動", title: "I12 基因組報告的撰寫、閱讀與解讀藝術",
          tags: ["star"],
          speakers: ["Heidi Rehm (USA)","Erik Sistermans (NL)"],
          detail: "如何撰寫清晰可行動的基因組報告？涵蓋ACGS/ACMG報告標準、結構化報告模板。臨床實踐有直接幫助。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "m_s13", b: "sym", l: "研討", title: "★ S13 細胞遺傳學 2.0 – 長讀長基因組",
          tags: ["star","cyto"],
          speakers: ["Adam Phillippy (USA)","Jose Espejo Valle-Inclan (PT)","Lars Feuk (SE)"],
          detail: "【細胞遺傳核心場次・備考重點！】\n・染色體組裝精度提升（telomere-to-telomere）\n・複雜結構變異完整解析\n・從核型到基因組的實驗室轉型策略討論",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "10:00–10:30", brk: "☕ 咖啡休息・海報自由參觀" },
      { time: "10:30–12:00", items: [
        { id: "m_c29", b: "con", l: "並行", title: "C29–C35 並行場次",
          tags: [], speakers: [],
          detail: "多場並行口頭報告。請至大會APP查詢。",
          link: "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme" },
      ]},
      { time: "14:00–15:30", items: [
        { id: "m_e05", b: "edu", l: "教育", title: "E05 長讀長RNA定序與表觀轉錄組學",
          tags: ["star","cyto"],
          speakers: ["Cole Trapnell (USA)","Ana Conesa (ES)"],
          detail: "完整剪接本識別、RNA修飾（m6A等表觀轉錄組標記）、轉錄本融合偵測。診斷困難病例的RNA研究直接參考。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "m_i13", b: "int", l: "互動", title: "I13 幾乎被我們遺漏的突變",
          tags: ["star"],
          speakers: ["Claudia Carvalho (USA)","David Adams (UK)"],
          detail: "深度內含子變異、複雜結構重排、假基因干擾、低豐度體細胞嵌合突變。實際病例導向，高度臨床相關。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "17:00–18:30", items: [
        { id: "m_i17", b: "int", l: "互動", title: "★ I17 結構性染色體變異",
          tags: ["star","cyto"],
          speakers: ["Jose Espejo Valle-Inclan (PT)","Claudia Carvalho (USA)"],
          detail: "【細胞遺傳核心場次・備考重點！】\n・染色體微陣列 vs 長讀長定序比較\n・染色體碎裂（chromothripsis）識別\n・平衡易位精確斷點定位",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "m_i18", b: "int", l: "互動", title: "★ I18 生殖攜帶者篩查：衝擊與後續",
          tags: ["star","prenatal"],
          speakers: ["Danny M. Cohn (NL)","Stina Lou (DK)","Roseline Favresse (FR)"],
          detail: "【產前診斷核心場次！】\n・擴展性攜帶者篩查（ECS）不同策略比較\n・篩查結果的遺傳諮詢與心理影響\n・台灣/亞洲族群攜帶頻率數據意義",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "20:00起", items: [
        { id: "m_eve", b: "soc", l: "社交", title: "🎉 ESHG 交流之夜",
          tags: [], speakers: [],
          detail: "大會最重要社交活動，人脈建立的黃金時段。地點另行公告。",
          link: "https://2026.eshg.org/myconference/official-events/" },
      ]},
    ],

    // ── 週二 6/16 ─────────────────────────────────────────
    tue: [
      { time: "09:00–10:30", items: [
        { id: "t_s22", b: "sym", l: "研討", title: "S22 多組學解決複雜病例",
          tags: ["star"],
          speakers: ["David Adams (UK)","Sebastian Lunke (AU)"],
          detail: "整合WGS、RNA定序、蛋白質組學解決長期未確診罕見疾病。提升診斷率的策略洞見。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "t_s23", b: "sym", l: "研討", title: "★ S23 產前檢測的未來",
          tags: ["star","prenatal"],
          speakers: ["Wendy Chung (USA)","Arianna Tucci (UK)","Stina Lou (DK)"],
          detail: "【本次大會最重要產前診斷場次！全程必到！】\n・NIPT技術極限與新一代應用\n・胎兒全基因組定序的臨床整合\n・cfDNA非預期發現（incidental findings）處理\n・基因編輯在產前介入的倫理前沿",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "t_s25", b: "sym", l: "研討", title: "S25 基因編輯進入臨床",
          tags: ["star"],
          speakers: ["Gerald Schwank (CH)","Julia Vitarello (USA)"],
          detail: "CRISPR/Cas9基因編輯療法最新臨床試驗數據，以及下一代體內基因編輯療法的安全性與效力。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "t_e07", b: "edu", l: "教育", title: "E07 染色體外DNA（ecDNA）：染色體外的生命",
          tags: ["cyto"],
          speakers: ["Anton G Henssen (DE)","Jasmine Plummer (USA)"],
          detail: "ecDNA在癌症驅動基因擴增中的角色，以及在癌症進化與治療抵抗中的機制。細胞遺傳學與癌症遺傳學交叉前沿。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
      { time: "10:30–11:00", brk: "☕ 咖啡休息" },
      { time: "11:00–12:30", items: [
        { id: "t_c36", b: "con", l: "並行", title: "C36–C41 最終並行場次",
          tags: [], speakers: [],
          detail: "大會最後一輪並行報告，可能包含 Late Breaking 最新突破性研究。請至大會APP查詢。",
          link: "https://cattendee.abstractsonline.com/meeting/21531/pages/Scientific_Programme" },
      ]},
      { time: "12:30–13:30", brk: "🍱 午餐休息" },
      { time: "13:30–16:00", items: [
        { id: "t_pl456", b: "pl", l: "全體", title: "PL4–6 三大獎項講座（ELPAG・ESHG・Mendel獎）",
          tags: ["star"],
          speakers: ["ELPAG獎得主","ESHG Award得主","Mendel獎得主"],
          detail: "13:30 ELPAG獎・13:50 ESHG最高榮譽獎・14:35 Mendel終身成就獎。每位得主通常帶來畢生最重要的研究成果。",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
        { id: "t_pl7", b: "pl", l: "全體", title: "PL7 頒獎典禮・閉幕致詞",
          tags: [],
          speakers: ["ESHG主席"],
          detail: "EJHG Citation Awards / ESHG Early Career Awards / Dian Donnai & Jill Clayton-Smith Award / 閉幕致詞",
          link: "https://2026.eshg.org/programme-at-a-glance-local/" },
      ]},
    ],

  }, // end sessions

}; // end CONFERENCE_CONFIG

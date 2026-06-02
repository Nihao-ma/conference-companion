/**
 * ╔══════════════════════════════════════════════════════╗
 * ║          CONFERENCE COMPANION — 會議設定檔           ║
 * ║  每次換會議只需要更新這一個檔案，其餘全部保持不動    ║
 * ╚══════════════════════════════════════════════════════╝
 *
 * 當前會議：115年度遺傳性及罕見疾病指定檢驗機構資格審查計畫 研習課程
 * 主辦：台灣周產期醫學會
 * 日期：2026年6月7日（星期日）
 * 地點：臺大醫學院1樓103講堂
 */

window.CONFERENCE_CONFIG = {

  // ── 基本資訊 ──────────────────────────────────────────
  name:       "遺傳罕見疾病研習 2026",
  subtitle:   "115年度遺傳性及罕見疾病指定檢驗機構資格審查計畫・台北",
  shortLabel: "遺傳罕見研習 6/7",
  dates:      "2026年6月7日（日）",
  location:   "臺大醫學院1樓103講堂，臺北市中正區仁愛路一段1號",
  startDate:  "2026-06-07T13:00:00+08:00",

  // ── Google Drive 儲存設定 ─────────────────────────────
  driveFolderName: "RareDisease20260607",
  notesFileName:   "raredisease20260607_notes.json",

  // ── 報到時間 ──────────────────────────────────────────
  registrationTimes: [
    "6/7（日）12:30–13:00 報到",
  ],

  // ── 重要連結 ──────────────────────────────────────────
  links: [
    ["台灣周產期醫學會",  "http://www.tsop.org.tw/"],
    ["線上報名/確認",     "http://www.tsop.org.tw/"],
    ["取消報名 e-mail",   "mailto:geneticddl@gmail.com"],
  ],

  // ── Google 地圖 ───────────────────────────────────────
  mapsUrl: "https://maps.google.com/?q=臺大醫學院+臺北市中正區仁愛路一段1號",
  venue:   "臺大醫學院1樓103講堂，臺北市中正區仁愛路一段1號",

  // ── AI 自動更新設定 ───────────────────────────────────
  updateUrls: [
    "http://www.tsop.org.tw/",
  ],
  keySessionsDesc: "Mosaic Trisomy產前診斷、細胞遺傳學命名法、帶因篩檢台灣經驗、產前帶因篩檢醫學倫理",
  specialistProfile: "OB/GYN產前診斷醫師",

  // ── 出發前自動更新時間點 ──────────────────────────────
  checkpoints: [
    { key: "w1", label: "出發前一週", days: 7, icon: "📅" },
    { key: "d3", label: "出發前三天", days: 3, icon: "📋" },
    { key: "d1", label: "出發前一天", days: 1, icon: "🔔" },
  ],

  // ── 個人備忘提醒 ──────────────────────────────────────
  personalReminders: [
    "自行攜帶水杯（現場不提供紙杯）",
    "報到時請先查詢報名編號",
    "課程結束3天後，上網列印上課證明",
    "有感冒症狀（咳嗽、流鼻水）請佩戴口罩",
    "全程4小時，積分申請中（周產期專科醫師積分、醫檢師繼續教育積分）",
  ],

  // ── 天數標籤 ──────────────────────────────────────────
  days: {
    sun: "週日 6/7",
  },

  // ══════════════════════════════════════════════════════
  // ── 完整議程 ──────────────────────────────────────────
  // ══════════════════════════════════════════════════════
  sessions: {

    sun: [
      { time: "12:30–13:00", brk: "📋 報到" },

      { time: "13:00–13:50", items: [
        {
          id: "s_01",
          b: "edu",
          l: "講座",
          title: "Mosaic Trisomy at Prenatal Diagnosis：LEVEL I 到 LEVEL III 鑲嵌型及正常變異",
          tags: ["star", "prenatal", "cyto"],
          speakers: ["陳持平 教授"],
          detail: "產前診斷中鑲嵌型三染色體症（Mosaic Trisomy）的分級判讀：\n・LEVEL I：僅限組織培養中觀察到\n・LEVEL II：多個細胞株中確認\n・LEVEL III：多組織確認\n\n同時涵蓋正常染色體變異（Normal Variants）的辨識與臨床意義，避免誤判為病理性異常。\n\n⭐ 細胞遺傳學主持人/報告簽署人備考重點",
          link: "http://www.tsop.org.tw/",
        },
      ]},

      { time: "13:50–14:40", items: [
        {
          id: "s_02",
          b: "edu",
          l: "講座",
          title: "Cytogenetic nomenclature based on advanced genomic technologies",
          tags: ["star", "cyto"],
          speakers: ["郭保麟 教授"],
          detail: "進階基因體技術下的細胞遺傳學命名法更新：\n・ISCN（國際人類細胞遺傳學命名法）最新版本\n・微陣列（array CGH/SNP array）結果的標準命名\n・次世代定序（NGS）與長讀長定序結構變異命名規則\n・臨床報告撰寫的實際應用\n\n🔬 檢驗機構主持人與報告簽署人的必修內容",
          link: "http://www.tsop.org.tw/",
        },
      ]},

      { time: "14:40–15:00", brk: "☕ 休息" },

      { time: "15:00–15:50", items: [
        {
          id: "s_03",
          b: "edu",
          l: "講座",
          title: "帶因篩檢之台灣經驗",
          tags: ["star", "prenatal"],
          speakers: ["林芯伃 醫師"],
          detail: "台灣本土擴展性帶因篩檢（Expanded Carrier Screening, ECS）的實務經驗：\n・台灣族群常見遺傳性疾病攜帶率數據\n・篩檢基因組合選擇原則\n・陽性結果的遺傳諮詢流程\n・送檢醫師與檢驗機構的實際協作模式\n\n🧬 送檢醫師與檢驗機構人員直接相關",
          link: "http://www.tsop.org.tw/",
        },
      ]},

      { time: "15:50–16:40", items: [
        {
          id: "s_04",
          b: "edu",
          l: "講座",
          title: "產前帶因篩檢之醫學倫理",
          tags: ["star", "prenatal"],
          speakers: ["蔡甫昌 教授"],
          detail: "產前帶因篩檢的倫理議題深度討論：\n・知情同意（Informed Consent）的要求與挑戰\n・篩查前後遺傳諮詢的倫理義務\n・陽性結果對家庭的心理與社會影響\n・生殖決策自主權 vs. 醫師指導責任\n・次要發現（Incidental Findings）的揭露倫理\n\n⭐ 醫療倫理核心場次，送檢醫師必聽",
          link: "http://www.tsop.org.tw/",
        },
      ]},

      { time: "16:40–17:00", items: [
        {
          id: "s_qa",
          b: "int",
          l: "討論",
          title: "Q & A：學員對課程提出問題並討論",
          tags: [],
          speakers: ["全體講師"],
          detail: "四場課程的綜合Q&A。建議事先整理疑問，包括：\n・鑲嵌型案例的實際判讀困惑\n・命名法應用的模糊地帶\n・帶因篩檢結果的處理流程疑問\n・倫理個案討論",
          link: "http://www.tsop.org.tw/",
        },
      ]},

      { time: "17:00", brk: "👋 賦歸" },
    ],

  }, // end sessions

}; // end CONFERENCE_CONFIG

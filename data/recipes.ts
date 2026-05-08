export type Difficulty = "简单" | "中等" | "进阶";

export type Recipe = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  time: string;
  difficulty: Difficulty;
  image: string;
  accent: string;
  likes: number;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  ingredients: string[];
  steps: {
    title: string;
    time: string;
    image: string;
    detail: string;
  }[];
};

export const categories = [
  { name: "早午餐", slug: "brunch", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=90", count: 28 },
  { name: "轻食沙拉", slug: "salad", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=90", count: 34 },
  { name: "一人食", slug: "solo", image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=90", count: 42 },
  { name: "烘焙甜点", slug: "bakery", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90", count: 25 },
  { name: "家常热菜", slug: "home", image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=90", count: 57 },
  { name: "低卡高蛋白", slug: "protein", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90", count: 31 }
];

export const recipes: Recipe[] = [
  {
    slug: "miso-salmon-rice",
    title: "味噌焦糖三文鱼饭",
    subtitle: "酱香、油脂和米饭的温柔平衡",
    category: "一人食",
    time: "28 分钟",
    difficulty: "中等",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1400&q=90",
    accent: "#e94f37",
    likes: 3820,
    calories: 520,
    protein: "34g",
    carbs: "48g",
    fat: "21g",
    ingredients: ["三文鱼排 180g", "白味噌 1 勺", "蜂蜜 1 勺", "日式酱油 1 勺", "米饭 1 碗", "黄瓜片", "海苔碎", "熟芝麻"],
    steps: [
      {
        title: "调味噌酱",
        time: "5 分钟",
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1000&q=90",
        detail: "白味噌、蜂蜜、酱油和少量温水调匀，刷在鱼肉表面，静置入味。"
      },
      {
        title: "煎出焦糖边",
        time: "12 分钟",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=90",
        detail: "中小火先煎鱼皮，再翻面刷酱，直到表面轻微焦化。"
      },
      {
        title: "组装米饭碗",
        time: "6 分钟",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=90",
        detail: "热米饭铺底，放三文鱼、黄瓜、海苔和芝麻，最后淋少许剩余酱汁。"
      }
    ]
  },
  {
    slug: "tomato-burrata-toast",
    title: "番茄布拉塔酸面包",
    subtitle: "像周末阳光一样清爽的开放三明治",
    category: "早午餐",
    time: "16 分钟",
    difficulty: "简单",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1400&q=90",
    accent: "#d64f2f",
    likes: 2914,
    calories: 410,
    protein: "19g",
    carbs: "36g",
    fat: "22g",
    ingredients: ["酸面包 2 片", "布拉塔奶酪 1 个", "彩色小番茄", "罗勒叶", "橄榄油", "海盐", "黑胡椒"],
    steps: [
      {
        title: "烤面包",
        time: "4 分钟",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=90",
        detail: "面包两面刷橄榄油，烤到边缘酥脆、中间仍有韧性。"
      },
      {
        title: "腌番茄",
        time: "7 分钟",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1000&q=90",
        detail: "番茄对半切，用盐、黑胡椒和橄榄油轻轻拌匀。"
      },
      {
        title: "铺奶酪与香草",
        time: "5 分钟",
        image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=1000&q=90",
        detail: "布拉塔撕开放在面包上，铺番茄与罗勒，最后再补一点海盐。"
      }
    ]
  },
  {
    slug: "chili-chicken-noodle",
    title: "藤椒鸡丝凉面",
    subtitle: "冰凉爽滑，麻香先到，辣意收尾",
    category: "家常热菜",
    time: "35 分钟",
    difficulty: "中等",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=90",
    accent: "#596f48",
    likes: 6128,
    calories: 465,
    protein: "29g",
    carbs: "58g",
    fat: "13g",
    ingredients: ["鸡胸肉 1 块", "碱水面 180g", "黄瓜丝", "花生碎", "藤椒油", "辣椒油", "生抽", "香醋"],
    steps: [
      {
        title: "煮鸡胸与面条",
        time: "15 分钟",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1000&q=90",
        detail: "鸡胸加姜片煮熟撕丝，面条煮熟后过冰水保持弹性。"
      },
      {
        title: "调凉面汁",
        time: "6 分钟",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=90",
        detail: "生抽、香醋、藤椒油、辣椒油和少量糖调成平衡酱汁。"
      },
      {
        title: "拌匀装盘",
        time: "4 分钟",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=90",
        detail: "面条、鸡丝、黄瓜丝和花生碎拌匀，静置两分钟更入味。"
      }
    ]
  },
  {
    slug: "matcha-mille-crepe",
    title: "抹茶千层蛋糕",
    subtitle: "细腻茶香和轻盈奶油的层次游戏",
    category: "烘焙甜点",
    time: "90 分钟",
    difficulty: "进阶",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=90",
    accent: "#7b8f5a",
    likes: 4886,
    calories: 380,
    protein: "8g",
    carbs: "42g",
    fat: "20g",
    ingredients: ["低筋面粉", "抹茶粉", "鸡蛋", "牛奶", "黄油", "淡奶油", "细砂糖"],
    steps: [
      {
        title: "制作饼皮面糊",
        time: "20 分钟",
        image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=1000&q=90",
        detail: "粉类过筛后和蛋奶混合，加入融化黄油，冷藏松弛。"
      },
      {
        title: "摊薄饼皮",
        time: "35 分钟",
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1000&q=90",
        detail: "不粘锅低温摊出薄饼，每张完全冷却后再叠放。"
      },
      {
        title: "层层抹奶油",
        time: "25 分钟",
        image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?auto=format&fit=crop&w=1000&q=90",
        detail: "奶油打至七分发，一层饼皮一层奶油，冷藏定型后切块。"
      }
    ]
  },
  {
    slug: "avocado-quinoa-bowl",
    title: "牛油果藜麦能量碗",
    subtitle: "低负担却足够漂亮的一餐",
    category: "低卡高蛋白",
    time: "24 分钟",
    difficulty: "简单",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=90",
    accent: "#596f48",
    likes: 3567,
    calories: 440,
    protein: "22g",
    carbs: "45g",
    fat: "18g",
    ingredients: ["藜麦", "牛油果", "鹰嘴豆", "小番茄", "水波蛋", "芝麻菜", "柠檬汁", "希腊酸奶"],
    steps: [
      {
        title: "煮藜麦",
        time: "14 分钟",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=90",
        detail: "藜麦冲洗后小火煮熟，焖 5 分钟让口感蓬松。"
      },
      {
        title: "处理配菜",
        time: "6 分钟",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=90",
        detail: "牛油果切片，鹰嘴豆烤香，小番茄和芝麻菜用柠檬汁拌一下。"
      },
      {
        title: "完成能量碗",
        time: "4 分钟",
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=90",
        detail: "藜麦打底，码放配菜和水波蛋，淋酸奶酱。"
      }
    ]
  },
  {
    slug: "black-pepper-beef",
    title: "黑椒芦笋牛肉粒",
    subtitle: "十分钟锅气，让晚餐体面起来",
    category: "家常热菜",
    time: "18 分钟",
    difficulty: "中等",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=90",
    accent: "#8c5b35",
    likes: 5215,
    calories: 498,
    protein: "39g",
    carbs: "18g",
    fat: "30g",
    ingredients: ["牛排肉", "芦笋", "彩椒", "现磨黑胡椒", "蚝油", "生抽", "蒜末", "黄油"],
    steps: [
      {
        title: "腌牛肉粒",
        time: "8 分钟",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=90",
        detail: "牛肉切粒，用生抽、黑胡椒和少量油抓匀。"
      },
      {
        title: "猛火快炒",
        time: "6 分钟",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=90",
        detail: "热锅煎香牛肉，再加入芦笋和彩椒快速翻炒。"
      },
      {
        title: "黄油收汁",
        time: "4 分钟",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=90",
        detail: "加入蚝油和黄油，裹匀后立刻出锅。"
      }
    ]
  }
];

export const getRecipeBySlug = (slug: string) => recipes.find((recipe) => recipe.slug === slug);

export const getRecipesByCategory = (category: string) =>
  recipes.filter((recipe) => recipe.category === category || recipe.category.toLowerCase() === category.toLowerCase());

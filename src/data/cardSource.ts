export type CardSource = {
  readonly [id: number]: {
    type: 'event',
    eventId: number,
  } | {
    type: 'gacha',
    gachaId: number,
  },
};

export const CARD_SOURCE: CardSource = {
  1: { type: 'gacha', gachaId: 1 },
  2: { type: 'gacha', gachaId: 1 },
  3: { type: 'gacha', gachaId: 1 },
  4: { type: 'gacha', gachaId: 1 },
  5: { type: 'gacha', gachaId: 1 },
  6: { type: 'gacha', gachaId: 1 },
  7: { type: 'gacha', gachaId: 1 },
  8: { type: 'gacha', gachaId: 1 },
  9: { type: 'gacha', gachaId: 1 },
  10: { type: 'gacha', gachaId: 1 },
  11: { type: 'gacha', gachaId: 1 },
  12: { type: 'gacha', gachaId: 1 },
  13: { type: 'gacha', gachaId: 1 },
  14: { type: 'gacha', gachaId: 1 },
  15: { type: 'gacha', gachaId: 1 },
  16: { type: 'gacha', gachaId: 1 },
  17: { type: 'gacha', gachaId: 1 },
  18: { type: 'gacha', gachaId: 1 },
  19: { type: 'gacha', gachaId: 1 },
  20: { type: 'gacha', gachaId: 1 },
  21: { type: 'gacha', gachaId: 1 },
  22: { type: 'gacha', gachaId: 1 },
  23: { type: 'gacha', gachaId: 1 },
  24: { type: 'gacha', gachaId: 1 },
  25: { type: 'gacha', gachaId: 1 },
  26: { type: 'gacha', gachaId: 1 },
  27: { type: 'gacha', gachaId: 1 },
  28: { type: 'gacha', gachaId: 1 },
  29: { type: 'gacha', gachaId: 1 },
  30: { type: 'gacha', gachaId: 1 },
  31: { type: 'gacha', gachaId: 1 },
  32: { type: 'gacha', gachaId: 1 },
  33: { type: 'gacha', gachaId: 1 },
  34: { type: 'gacha', gachaId: 1 },
  35: { type: 'gacha', gachaId: 1 },
  36: { type: 'gacha', gachaId: 1 },
  37: { type: 'gacha', gachaId: 1 },
  38: { type: 'gacha', gachaId: 1 },
  39: { type: 'gacha', gachaId: 1 },
  40: { type: 'gacha', gachaId: 1 },
  41: { type: 'gacha', gachaId: 1 },
  42: { type: 'gacha', gachaId: 1 },
  43: { type: 'gacha', gachaId: 1 },
  44: { type: 'gacha', gachaId: 1 },
  45: { type: 'gacha', gachaId: 1 },
  46: { type: 'gacha', gachaId: 1 },
  47: { type: 'gacha', gachaId: 1 },
  48: { type: 'gacha', gachaId: 1 },
  49: { type: 'gacha', gachaId: 1 },
  50: { type: 'gacha', gachaId: 1 },
  51: { type: 'gacha', gachaId: 1 },
  52: { type: 'gacha', gachaId: 1 },
  53: { type: 'gacha', gachaId: 1 },
  54: { type: 'gacha', gachaId: 1 },
  55: { type: 'gacha', gachaId: 1 },
  56: { type: 'gacha', gachaId: 1 },
  57: { type: 'gacha', gachaId: 1 },
  58: { type: 'gacha', gachaId: 1 },
  59: { type: 'gacha', gachaId: 1 },
  60: { type: 'gacha', gachaId: 1 },
  61: { type: 'gacha', gachaId: 1 },
  62: { type: 'gacha', gachaId: 1 },
  63: { type: 'gacha', gachaId: 1 },
  64: { type: 'gacha', gachaId: 1 },
  65: { type: 'gacha', gachaId: 1 },
  66: { type: 'gacha', gachaId: 1 },
  67: { type: 'gacha', gachaId: 1 },
  68: { type: 'gacha', gachaId: 1 },
  69: { type: 'gacha', gachaId: 1 },
  70: { type: 'gacha', gachaId: 1 },
  71: { type: 'gacha', gachaId: 1 },
  72: { type: 'gacha', gachaId: 1 },
  73: { type: 'gacha', gachaId: 1 },
  74: { type: 'gacha', gachaId: 1 },
  75: { type: 'gacha', gachaId: 1 },
  76: { type: 'gacha', gachaId: 1 },
  77: { type: 'gacha', gachaId: 1 },
  78: { type: 'gacha', gachaId: 1 },
  79: { type: 'gacha', gachaId: 1 },
  80: { type: 'gacha', gachaId: 1 },
  81: { type: 'gacha', gachaId: 1 },
  82: { type: 'gacha', gachaId: 1 },
  83: { type: 'gacha', gachaId: 1 },
  84: { type: 'gacha', gachaId: 1 },
  85: { type: 'gacha', gachaId: 1 },
  86: { type: 'gacha', gachaId: 1 },
  87: { type: 'gacha', gachaId: 1 },
  88: { type: 'gacha', gachaId: 1 },
  89: { type: 'gacha', gachaId: 1 },
  90: { type: 'gacha', gachaId: 1 },
  91: { type: 'gacha', gachaId: 1 },
  92: { type: 'gacha', gachaId: 1 },
  93: { type: 'gacha', gachaId: 1 },
  94: { type: 'gacha', gachaId: 1 },
  95: { type: 'gacha', gachaId: 1 },
  96: { type: 'gacha', gachaId: 1 },
  97: { type: 'gacha', gachaId: 1 },
  98: { type: 'gacha', gachaId: 1 },
  99: { type: 'gacha', gachaId: 1 },
  100: { type: 'gacha', gachaId: 10001 },
  101: { type: 'gacha', gachaId: 10001 },
  102: { type: 'event', eventId: 1 },
  103: { type: 'event', eventId: 1 },
  104: { type: 'event', eventId: 1 },
  105: { type: 'gacha', gachaId: 20001 },
  106: { type: 'gacha', gachaId: 20001 },
  107: { type: 'gacha', gachaId: 10002 },
  108: { type: 'gacha', gachaId: 10002 },
  109: { type: 'event', eventId: 2 },
  110: { type: 'event', eventId: 2 },
  111: { type: 'event', eventId: 2 },
  112: { type: 'gacha', gachaId: 20002 },
  113: { type: 'gacha', gachaId: 20002 },
  114: { type: 'gacha', gachaId: 20002 },
  115: { type: 'gacha', gachaId: 10003 },
  116: { type: 'gacha', gachaId: 10003 },
  117: { type: 'event', eventId: 3 },
  118: { type: 'event', eventId: 3 },
  119: { type: 'event', eventId: 3 },
  120: { type: 'gacha', gachaId: 20003 },
  121: { type: 'gacha', gachaId: 20003 },
  122: { type: 'gacha', gachaId: 10004 },
  123: { type: 'gacha', gachaId: 10004 },
  124: { type: 'event', eventId: 4 },
  125: { type: 'event', eventId: 4 },
  126: { type: 'event', eventId: 4 },
  127: { type: 'gacha', gachaId: 30001 },
  128: { type: 'gacha', gachaId: 30001 },
  129: { type: 'gacha', gachaId: 30001 },
  130: { type: 'gacha', gachaId: 30001 },
  131: { type: 'gacha', gachaId: 30001 },
  132: { type: 'gacha', gachaId: 10005 },
  133: { type: 'gacha', gachaId: 10005 },
  134: { type: 'event', eventId: 5 },
  135: { type: 'event', eventId: 5 },
  136: { type: 'event', eventId: 5 },
  137: { type: 'gacha', gachaId: 20004 },
  138: { type: 'gacha', gachaId: 20004 },
  139: { type: 'gacha', gachaId: 10006 },
  140: { type: 'gacha', gachaId: 10006 },
  141: { type: 'event', eventId: 6 },
  142: { type: 'event', eventId: 6 },
  143: { type: 'event', eventId: 6 },
  144: { type: 'gacha', gachaId: 30002 },
  145: { type: 'gacha', gachaId: 30002 },
  146: { type: 'gacha', gachaId: 30002 },
  147: { type: 'gacha', gachaId: 30002 },
  148: { type: 'gacha', gachaId: 30002 },
  149: { type: 'gacha', gachaId: 10007 },
  150: { type: 'gacha', gachaId: 10007 },
  151: { type: 'event', eventId: 7 },
  152: { type: 'gacha', gachaId: 10008 },
  153: { type: 'event', eventId: 7 },
  154: { type: 'event', eventId: 7 },
  155: { type: 'gacha', gachaId: 20005 },
  156: { type: 'gacha', gachaId: 20005 },
  157: { type: 'gacha', gachaId: 10009 },
  158: { type: 'gacha', gachaId: 10009 },
  159: { type: 'event', eventId: 8 },
  160: { type: 'gacha', gachaId: 10010 },
  161: { type: 'event', eventId: 8 },
  162: { type: 'event', eventId: 8 },
  163: { type: 'gacha', gachaId: 30003 },
  164: { type: 'gacha', gachaId: 30003 },
  165: { type: 'gacha', gachaId: 30003 },
  166: { type: 'gacha', gachaId: 30003 },
  167: { type: 'gacha', gachaId: 10011 },
  168: { type: 'gacha', gachaId: 10011 },
  169: { type: 'event', eventId: 9 },
  170: { type: 'gacha', gachaId: 10012 },
  171: { type: 'event', eventId: 9 },
  172: { type: 'event', eventId: 9 },
  173: { type: 'gacha', gachaId: 20006 },
  174: { type: 'gacha', gachaId: 20006 },
  175: { type: 'gacha', gachaId: 10013 },
  176: { type: 'gacha', gachaId: 10013 },
  177: { type: 'gacha', gachaId: 10014 },
  178: { type: 'event', eventId: 10 },
  179: { type: 'event', eventId: 10 },
  180: { type: 'event', eventId: 10 },
  181: { type: 'gacha', gachaId: 30004 },
  182: { type: 'gacha', gachaId: 30004 },
  183: { type: 'gacha', gachaId: 30004 },
  184: { type: 'gacha', gachaId: 30004 },
  185: { type: 'gacha', gachaId: 10015 },
  186: { type: 'gacha', gachaId: 10015 },
  187: { type: 'event', eventId: 11 },
  188: { type: 'gacha', gachaId: 10016 },
  189: { type: 'event', eventId: 11 },
  190: { type: 'event', eventId: 11 },
  191: { type: 'gacha', gachaId: 20007 },
  192: { type: 'gacha', gachaId: 20007 },
  193: { type: 'gacha', gachaId: 10017 },
  194: { type: 'gacha', gachaId: 10017 },
  195: { type: 'gacha', gachaId: 10018 },
  196: { type: 'event', eventId: 12 },
  197: { type: 'event', eventId: 12 },
  198: { type: 'event', eventId: 12 },
  199: { type: 'gacha', gachaId: 30005 },
  200: { type: 'gacha', gachaId: 30005 },
  201: { type: 'gacha', gachaId: 30005 },
  202: { type: 'gacha', gachaId: 30005 },
  203: { type: 'gacha', gachaId: 10019 },
  204: { type: 'gacha', gachaId: 10019 },
  205: { type: 'gacha', gachaId: 10019 },
  206: { type: 'gacha', gachaId: 10019 },
  207: { type: 'gacha', gachaId: 10019 },
  208: { type: 'gacha', gachaId: 10019 },
  209: { type: 'gacha', gachaId: 10019 },
  210: { type: 'gacha', gachaId: 10019 },
  211: { type: 'gacha', gachaId: 10019 },
  212: { type: 'gacha', gachaId: 10019 },
  213: { type: 'gacha', gachaId: 10019 },
  214: { type: 'event', eventId: 13 },
  215: { type: 'gacha', gachaId: 10020 },
  216: { type: 'event', eventId: 13 },
  217: { type: 'event', eventId: 13 },
  218: { type: 'gacha', gachaId: 20008 },
  219: { type: 'gacha', gachaId: 20008 },
  220: { type: 'gacha', gachaId: 10021 },
  221: { type: 'gacha', gachaId: 10021 },
  222: { type: 'gacha', gachaId: 10022 },
  223: { type: 'event', eventId: 14 },
  224: { type: 'event', eventId: 14 },
  225: { type: 'event', eventId: 14 },
  226: { type: 'gacha', gachaId: 30006 },
  227: { type: 'gacha', gachaId: 30006 },
  228: { type: 'gacha', gachaId: 30006 },
  229: { type: 'gacha', gachaId: 30006 },
  230: { type: 'gacha', gachaId: 10023 },
  231: { type: 'gacha', gachaId: 10023 },
  232: { type: 'gacha', gachaId: 10024 },
  233: { type: 'event', eventId: 15 },
  234: { type: 'event', eventId: 15 },
  235: { type: 'event', eventId: 15 },
  236: { type: 'gacha', gachaId: 20009 },
  237: { type: 'gacha', gachaId: 20009 },
  238: { type: 'gacha', gachaId: 10025 },
  239: { type: 'gacha', gachaId: 10025 },
  240: { type: 'gacha', gachaId: 10026 },
  241: { type: 'event', eventId: 16 },
  242: { type: 'event', eventId: 16 },
  243: { type: 'event', eventId: 16 },
  244: { type: 'gacha', gachaId: 30007 },
  245: { type: 'gacha', gachaId: 30007 },
  246: { type: 'gacha', gachaId: 30007 },
  247: { type: 'gacha', gachaId: 30007 },
  248: { type: 'gacha', gachaId: 10027 },
  249: { type: 'gacha', gachaId: 10027 },
  250: { type: 'gacha', gachaId: 10028 },
  251: { type: 'event', eventId: 17 },
  252: { type: 'event', eventId: 17 },
  253: { type: 'event', eventId: 17 },
  254: { type: 'gacha', gachaId: 20010 },
  255: { type: 'gacha', gachaId: 20010 },
  256: { type: 'gacha', gachaId: 10029 },
  257: { type: 'gacha', gachaId: 10029 },
  258: { type: 'gacha', gachaId: 10030 },
  259: { type: 'event', eventId: 18 },
  260: { type: 'event', eventId: 18 },
  261: { type: 'event', eventId: 18 },
  262: { type: 'gacha', gachaId: 30008 },
  263: { type: 'gacha', gachaId: 30008 },
  264: { type: 'gacha', gachaId: 30008 },
  265: { type: 'gacha', gachaId: 30008 },
  266: { type: 'gacha', gachaId: 10031 },
  267: { type: 'gacha', gachaId: 10031 },
  268: { type: 'event', eventId: 19 },
  269: { type: 'gacha', gachaId: 10032 },
  270: { type: 'event', eventId: 19 },
  271: { type: 'event', eventId: 19 },
  272: { type: 'gacha', gachaId: 20011 },
  273: { type: 'gacha', gachaId: 20011 },
  274: { type: 'gacha', gachaId: 10033 },
  275: { type: 'gacha', gachaId: 10033 },
  276: { type: 'gacha', gachaId: 10034 },
  277: { type: 'event', eventId: 20 },
  278: { type: 'event', eventId: 20 },
  279: { type: 'event', eventId: 20 },
  280: { type: 'gacha', gachaId: 30009 },
  281: { type: 'gacha', gachaId: 30009 },
  282: { type: 'gacha', gachaId: 30009 },
  283: { type: 'gacha', gachaId: 30009 },
  284: { type: 'gacha', gachaId: 30010 },
  285: { type: 'gacha', gachaId: 30010 },
  286: { type: 'gacha', gachaId: 30010 },
  287: { type: 'gacha', gachaId: 10035 },
  288: { type: 'gacha', gachaId: 10035 },
  289: { type: 'gacha', gachaId: 10036 },
  290: { type: 'event', eventId: 21 },
  291: { type: 'event', eventId: 21 },
  292: { type: 'event', eventId: 21 },
  293: { type: 'gacha', gachaId: 20012 },
  294: { type: 'gacha', gachaId: 20012 },
  295: { type: 'gacha', gachaId: 10037 },
  296: { type: 'gacha', gachaId: 10037 },
  297: { type: 'gacha', gachaId: 10038 },
  298: { type: 'event', eventId: 22 },
  299: { type: 'event', eventId: 22 },
  300: { type: 'event', eventId: 22 },
  301: { type: 'gacha', gachaId: 30011 },
  302: { type: 'gacha', gachaId: 30011 },
  303: { type: 'gacha', gachaId: 30011 },
  304: { type: 'gacha', gachaId: 30011 },
  305: { type: 'gacha', gachaId: 10039 },
  306: { type: 'gacha', gachaId: 10039 },
  307: { type: 'event', eventId: 23 },
  308: { type: 'gacha', gachaId: 10040 },
  309: { type: 'event', eventId: 23 },
  310: { type: 'event', eventId: 23 },
  311: { type: 'gacha', gachaId: 20013 },
  312: { type: 'gacha', gachaId: 20013 },
  313: { type: 'gacha', gachaId: 10041 },
  314: { type: 'gacha', gachaId: 10041 },
  315: { type: 'gacha', gachaId: 10042 },
  316: { type: 'event', eventId: 24 },
  317: { type: 'event', eventId: 24 },
  318: { type: 'event', eventId: 24 },
  319: { type: 'gacha', gachaId: 30014 },
  320: { type: 'gacha', gachaId: 30014 },
  321: { type: 'gacha', gachaId: 30014 },
  322: { type: 'gacha', gachaId: 30014 },
  323: { type: 'gacha', gachaId: 10043 },
  324: { type: 'gacha', gachaId: 10043 },
  325: { type: 'gacha', gachaId: 10044 },
  326: { type: 'event', eventId: 25 },
  327: { type: 'event', eventId: 25 },
  328: { type: 'event', eventId: 25 },
  329: { type: 'gacha', gachaId: 20014 },
  330: { type: 'gacha', gachaId: 20014 },
  331: { type: 'gacha', gachaId: 10045 },
  332: { type: 'gacha', gachaId: 10045 },
  333: { type: 'gacha', gachaId: 10046 },
  334: { type: 'event', eventId: 26 },
  335: { type: 'event', eventId: 26 },
  336: { type: 'event', eventId: 26 },
  337: { type: 'gacha', gachaId: 30015 },
  338: { type: 'gacha', gachaId: 30015 },
  339: { type: 'gacha', gachaId: 30015 },
  340: { type: 'gacha', gachaId: 30015 },
  341: { type: 'gacha', gachaId: 10047 },
  342: { type: 'gacha', gachaId: 10047 },
  343: { type: 'gacha', gachaId: 10048 },
  344: { type: 'event', eventId: 27 },
  345: { type: 'event', eventId: 27 },
  346: { type: 'event', eventId: 27 },
  347: { type: 'gacha', gachaId: 20015 },
  348: { type: 'gacha', gachaId: 20015 },
  349: { type: 'gacha', gachaId: 10049 },
  350: { type: 'gacha', gachaId: 10049 },
  351: { type: 'gacha', gachaId: 10050 },
  352: { type: 'event', eventId: 28 },
  353: { type: 'event', eventId: 28 },
  354: { type: 'event', eventId: 28 },
  355: { type: 'gacha', gachaId: 30016 },
  356: { type: 'gacha', gachaId: 30016 },
  357: { type: 'gacha', gachaId: 30016 },
  358: { type: 'gacha', gachaId: 30016 },
  359: { type: 'gacha', gachaId: 10051 },
  360: { type: 'gacha', gachaId: 10051 },
  361: { type: 'gacha', gachaId: 10052 },
  362: { type: 'event', eventId: 29 },
  363: { type: 'event', eventId: 29 },
  364: { type: 'event', eventId: 29 },
  365: { type: 'gacha', gachaId: 20016 },
  366: { type: 'gacha', gachaId: 20016 },
  367: { type: 'gacha', gachaId: 10053 },
  368: { type: 'gacha', gachaId: 10053 },
  369: { type: 'gacha', gachaId: 10054 },
  370: { type: 'event', eventId: 30 },
  371: { type: 'event', eventId: 30 },
  372: { type: 'event', eventId: 30 },
  373: { type: 'gacha', gachaId: 30017 },
  374: { type: 'gacha', gachaId: 30017 },
  375: { type: 'gacha', gachaId: 30017 },
  376: { type: 'gacha', gachaId: 30017 },
  377: { type: 'gacha', gachaId: 30017 },
  378: { type: 'gacha', gachaId: 10055 },
  379: { type: 'gacha', gachaId: 10055 },
  380: { type: 'gacha', gachaId: 10055 },
  381: { type: 'event', eventId: 31 },
  382: { type: 'event', eventId: 31 },
  383: { type: 'event', eventId: 31 },
  384: { type: 'gacha', gachaId: 20017 },
  385: { type: 'gacha', gachaId: 20017 },
  386: { type: 'gacha', gachaId: 10056 },
  387: { type: 'gacha', gachaId: 10056 },
  388: { type: 'gacha', gachaId: 10057 },
  389: { type: 'event', eventId: 32 },
  390: { type: 'event', eventId: 32 },
  391: { type: 'event', eventId: 32 },
  392: { type: 'gacha', gachaId: 30018 },
  393: { type: 'gacha', gachaId: 30018 },
  394: { type: 'gacha', gachaId: 30018 },
  395: { type: 'gacha', gachaId: 30018 },
  396: { type: 'gacha', gachaId: 10058 },
  397: { type: 'gacha', gachaId: 10058 },
  398: { type: 'gacha', gachaId: 10059 },
  399: { type: 'event', eventId: 33 },
  400: { type: 'event', eventId: 33 },
  401: { type: 'event', eventId: 33 },
  402: { type: 'gacha', gachaId: 40001 },
  403: { type: 'gacha', gachaId: 40001 },
  404: { type: 'gacha', gachaId: 40001 },
  405: { type: 'gacha', gachaId: 10060 },
  406: { type: 'gacha', gachaId: 10060 },
  407: { type: 'gacha', gachaId: 10061 },
  408: { type: 'event', eventId: 34 },
  409: { type: 'event', eventId: 34 },
  410: { type: 'event', eventId: 34 },
  411: { type: 'gacha', gachaId: 30019 },
  412: { type: 'gacha', gachaId: 30019 },
  413: { type: 'gacha', gachaId: 30019 },
  414: { type: 'gacha', gachaId: 30019 },
  415: { type: 'gacha', gachaId: 30019 },
  416: { type: 'gacha', gachaId: 10062 },
  417: { type: 'gacha', gachaId: 10062 },
  418: { type: 'gacha', gachaId: 10063 },
  419: { type: 'event', eventId: 35 },
  420: { type: 'event', eventId: 35 },
  421: { type: 'event', eventId: 35 },
  422: { type: 'gacha', gachaId: 40002 },
  423: { type: 'gacha', gachaId: 40002 },
  424: { type: 'gacha', gachaId: 10064 },
  425: { type: 'gacha', gachaId: 10064 },
  426: { type: 'gacha', gachaId: 10065 },
  427: { type: 'event', eventId: 36 },
  428: { type: 'event', eventId: 36 },
  429: { type: 'event', eventId: 36 },
  430: { type: 'gacha', gachaId: 30020 },
  431: { type: 'gacha', gachaId: 30020 },
  432: { type: 'gacha', gachaId: 30020 },
  433: { type: 'gacha', gachaId: 30020 },
  434: { type: 'gacha', gachaId: 10066 },
  435: { type: 'gacha', gachaId: 10066 },
  436: { type: 'gacha', gachaId: 10067 },
  437: { type: 'event', eventId: 37 },
  438: { type: 'event', eventId: 37 },
  439: { type: 'event', eventId: 37 },
  440: { type: 'gacha', gachaId: 40003 },
  441: { type: 'gacha', gachaId: 40003 },
  442: { type: 'gacha', gachaId: 10068 },
  443: { type: 'gacha', gachaId: 10068 },
  444: { type: 'gacha', gachaId: 10069 },
  445: { type: 'event', eventId: 38 },
  446: { type: 'event', eventId: 38 },
  447: { type: 'event', eventId: 38 },
  448: { type: 'gacha', gachaId: 30021 },
  449: { type: 'gacha', gachaId: 30021 },
  450: { type: 'gacha', gachaId: 30021 },
  451: { type: 'gacha', gachaId: 30021 },
};

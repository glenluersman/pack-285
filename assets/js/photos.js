const photosEl = document.getElementById("gallery");
const photosEl1 = document.getElementById("gallery1");
const photosEl2 = document.getElementById("gallery2");

const rlfa23 = ["./assets/images/RLFA23/RLFA1.JPG","./assets/images/RLFA23/RLFA2.JPG","./assets/images/RLFA23/RLFA3.JPG",
                "./assets/images/RLFA23/RLFA4.JPG","./assets/images/RLFA23/RLFA5.JPG","./assets/images/RLFA23/RLFA6.jpg",
                "./assets/images/RLFA23/RLFA7.jpg","./assets/images/RLFA23/RLFA8.jpg","./assets/images/RLFA23/RLFA9.jpg",
                "./assets/images/RLFA23/RLFA10.jpg","./assets/images/RLFA23/RLFA11.jpg","./assets/images/RLFA23/RLFA12.jpg",
                "./assets/images/RLFA23/RLFA13.jpg","./assets/images/RLFA23/RLFA14.jpg","./assets/images/RLFA23/RLFA15.jpg",
                "./assets/images/RLFA23/RLFA16.jpg","./assets/images/RLFA23/RLFA17.jpg","./assets/images/RLFA23/RLFA18.jpg",
                "./assets/images/RLFA23/RLFA19.jpg","./assets/images/RLFA23/RLFA20.jpg","./assets/images/RLFA23/RLFA21.jpg",
                "./assets/images/RLFA23/RLFA22.jpg","./assets/images/RLFA23/RLFA23.jpg","./assets/images/RLFA23/RLFA24.jpg",
                "./assets/images/RLFA23/RLFA25.jpg","./assets/images/RLFA23/RLFA27.jpg","./assets/images/RLFA23/RLFA28.jpg",
                "./assets/images/RLFA23/RLFA29.jpg","./assets/images/RLFA23/RLFA30.jpg","./assets/images/RLFA23/RLFA31.jpg",
                "./assets/images/RLFA23/RLFA32.jpg","./assets/images/RLFA23/RLFA33.jpg","./assets/images/RLFA23/RLFA34.jpg",
                "./assets/images/RLFA23/RLFA35.jpg","./assets/images/RLFA23/RLFA36.jpg","./assets/images/RLFA23/RLFA37.jpg",
                "./assets/images/RLFA23/RLFA38.jpg","./assets/images/RLFA23/RLFA39.jpg","./assets/images/RLFA23/RLFA40.jpg",
                "./assets/images/RLFA23/RLFA41.jpg","./assets/images/RLFA23/RLFA42.jpg","./assets/images/RLFA23/RLFA43.jpg",
                "./assets/images/RLFA23/RLFA44.jpg","./assets/images/RLFA23/RLFA45.jpg","./assets/images/RLFA23/RLFA46.jpg",
                "./assets/images/RLFA23/RLFA47.jpg","./assets/images/RLFA23/RLFA48.jpg","./assets/images/RLFA23/RLFA49.jpg",
                "./assets/images/RLFA23/RLFA50.jpg","./assets/images/RLFA23/RLFA51.jpg","./assets/images/RLFA23/RLFA52.jpg",
                "./assets/images/RLFA23/RLFA53.JPEG","./assets/images/RLFA23/RLFA54.JPEG","./assets/images/RLFA23/RLFA55.JPEG",
                "./assets/images/RLFA23/RLFA56.JPEG"];

const CO28523 = ["./assets/images/285crossover23/crossover1.jpg","./assets/images/285crossover23/crossover2.jpg","./assets/images/285crossover23/crossover3.jpg",
                 "./assets/images/285crossover23/crossover4.jpg","./assets/images/285crossover23/crossover5.jpg","./assets/images/285crossover23/crossover6.jpg",
                 "./assets/images/285crossover23/crossover7.jpg","./assets/images/285crossover23/crossover8.jpg","./assets/images/285crossover23/crossover9.jpg",
                 "./assets/images/285crossover23/crossover10.jpg","./assets/images/285crossover23/crossover11.jpg","./assets/images/285crossover23/crossover12.jpg",
                 "./assets/images/285crossover23/crossover13.jpg","./assets/images/285crossover23/crossover14.jpg","./assets/images/285crossover23/crossover15.jpg",
                 "./assets/images/285crossover23/crossover16.jpg","./assets/images/285crossover23/crossover17.jpg","./assets/images/285crossover23/crossover18.jpg",
                 "./assets/images/285crossover23/crossover19.jpg","./assets/images/285crossover23/crossover20.jpg","./assets/images/285crossover23/crossover21.jpg",
                 "./assets/images/285crossover23/crossover22.jpg"];

const SS23 = ["./assets/images/scout-sunday23/sunday1.jpg","./assets/images/scout-sunday23/sunday2.jpg","./assets/images/scout-sunday23/sunday3.jpg",
              "./assets/images/scout-sunday23/sunday4.jpg","./assets/images/scout-sunday23/sunday5.jpg","./assets/images/scout-sunday23/sunday6.jpg",
              "./assets/images/scout-sunday23/sunday7.jpg","./assets/images/scout-sunday23/sunday8.jpg","./assets/images/scout-sunday23/sunday9.jpg",
              "./assets/images/scout-sunday23/sunday10.jpg","./assets/images/scout-sunday23/sunday11.jpg","./assets/images/scout-sunday23/sunday12.jpg",];

const MC23 = ["./assets/images/Caving23/cave1.jpeg","./assets/images/Caving23/cave2.jpeg","./assets/images/Caving23/cave3.jpg",
              "./assets/images/Caving23/cave4.jpg","./assets/images/Caving23/cave5.jpg","./assets/images/Caving23/cave6.jpg",
              "./assets/images/Caving23/cave7.jpg","./assets/images/Caving23/cave8.jpg","./assets/images/Caving23/cave9.jpg",
              "./assets/images/Caving23/cave10.jpg","./assets/images/Caving23/cave11.jpg","./assets/images/Caving23/cave12.jpg",
              "./assets/images/Caving23/cave13.jpg","./assets/images/Caving23/cave14.jpg","./assets/images/Caving23/cave15.jpg",
              "./assets/images/Caving23/cave16.jpg","./assets/images/Caving23/cave17.jpg","./assets/images/Caving23/cave18.jpg",
              "./assets/images/Caving23/cave19.jpg","./assets/images/Caving23/cave20.jpg","./assets/images/Caving23/cave21.jpg",
              "./assets/images/Caving23/cave22.jpg","./assets/images/Caving23/cave23.jpg","./assets/images/Caving23/cave24.jpg",
              "./assets/images/Caving23/cave25.jpg","./assets/images/Caving23/cave26.jpg","./assets/images/Caving23/cave27.jpg",
              "./assets/images/Caving23/cave28.jpg","./assets/images/Caving23/cave29.jpg","./assets/images/Caving23/cave30.jpg",
              "./assets/images/Caving23/cave31.jpg","./assets/images/Caving23/cave32.jpg","./assets/images/Caving23/cave33.jpg",
              "./assets/images/Caving23/cave34.jpg","./assets/images/Caving23/cave35.jpg","./assets/images/Caving23/cave36.jpg",
              "./assets/images/Caving23/cave37.jpg","./assets/images/Caving23/cave38.jpg","./assets/images/Caving23/cave39.jpg",
              "./assets/images/Caving23/cave40.jpg","./assets/images/Caving23/cave41.jpg","./assets/images/Caving23/cave42.jpg",
              "./assets/images/Caving23/cave43.jpg","./assets/images/Caving23/cave44.jpg","./assets/images/Caving23/cave45.jpg",
              "./assets/images/Caving23/cave46.jpg","./assets/images/Caving23/cave47.jpg","./assets/images/Caving23/cave48.jpg",
              "./assets/images/Caving23/cave49.jpg","./assets/images/Caving23/cave50.jpg","./assets/images/Caving23/cave51.jpg",
              "./assets/images/Caving23/cave52.jpg","./assets/images/Caving23/cave53.jpg","./assets/images/Caving23/cave54.jpg",
              "./assets/images/Caving23/cave55.jpg","./assets/images/Caving23/cave56.jpg","./assets/images/Caving23/cave57.jpg",
              "./assets/images/Caving23/cave58.jpg","./assets/images/Caving23/cave59.jpg","./assets/images/Caving23/cave60.jpg",
              "./assets/images/Caving23/cave61.jpg","./assets/images/Caving23/cave62.jpg","./assets/images/Caving23/cave63.jpg",
              "./assets/images/Caving23/cave64.jpg","./assets/images/Caving23/cave65.jpg","./assets/images/Caving23/cave66.jpg",
              "./assets/images/Caving23/cave67.jpg","./assets/images/Caving23/cave68.jpg","./assets/images/Caving23/cave69.jpg",
              "./assets/images/Caving23/cave70.jpg","./assets/images/Caving23/cave71.jpg","./assets/images/Caving23/cave72.jpg",
              "./assets/images/Caving23/cave73.jpg","./assets/images/Caving23/cave74.jpg","./assets/images/Caving23/cave75.jpg",
              "./assets/images/Caving23/cave76.jpg","./assets/images/Caving23/cave77.jpg","./assets/images/Caving23/cave78.jpg",
              "./assets/images/Caving23/cave79.jpg","./assets/images/Caving23/cave80.jpg","./assets/images/Caving23/cave81.jpg",
              "./assets/images/Caving23/cave82.jpg","./assets/images/Caving23/cave83.jpg","./assets/images/Caving23/cave84.jpg",
              "./assets/images/Caving23/cave85.jpg","./assets/images/Caving23/cave86.jpg","./assets/images/Caving23/cave87.jpg",
              "./assets/images/Caving23/cave88.jpg","./assets/images/Caving23/cave89.jpg","./assets/images/Caving23/cave90.jpg",
              "./assets/images/Caving23/cave91.jpg","./assets/images/Caving23/cave92.jpg","./assets/images/Caving23/cave93.jpg",
              "./assets/images/Caving23/cave94.jpg","./assets/images/Caving23/cave95.jpg","./assets/images/Caving23/cave96.jpg",
              "./assets/images/Caving23/cave97.jpg","./assets/images/Caving23/cave98.jpg","./assets/images/Caving23/cave99.jpg",
              "./assets/images/Caving23/cave100.jpg","./assets/images/Caving23/cave101.jpg","./assets/images/Caving23/cave102.jpg",
              "./assets/images/Caving23/cave103.jpg","./assets/images/Caving23/cave104.jpg","./assets/images/Caving23/cave105.jpg",
              "./assets/images/Caving23/cave106.jpg","./assets/images/Caving23/cave107.jpg","./assets/images/Caving23/cave108.jpg",
              "./assets/images/Caving23/cave109.jpg",];

const SFF23 = ["./assets/images/SFF23/sff1.jpg","./assets/images/SFF23/sff2.jpg","./assets/images/SFF23/sff3.jpg",
               "./assets/images/SFF23/sff4.jpg","./assets/images/SFF23/sff5.jpg","./assets/images/SFF23/sff6.jpg",
               "./assets/images/SFF23/sff7.jpg","./assets/images/SFF23/sff8.jpg","./assets/images/SFF23/sff9.jpg",
               "./assets/images/SFF23/sff10.jpg","./assets/images/SFF23/sff11.jpg","./assets/images/SFF23/sff12.jpg",
               "./assets/images/SFF23/sff13.jpg","./assets/images/SFF23/sff14.jpg","./assets/images/SFF23/sff15.jpg",
               "./assets/images/SFF23/sff16.jpg","./assets/images/SFF23/sff17.jpg","./assets/images/SFF23/sff18.jpg",
               "./assets/images/SFF23/sff19.jpg","./assets/images/SFF23/sff20.jpg","./assets/images/SFF23/sff21.jpg",
               "./assets/images/SFF23/sff22.jpg","./assets/images/SFF23/sff23.jpg","./assets/images/SFF23/sff24.jpg",
               "./assets/images/SFF23/sff25.jpg"];

const BP23 = ["./assets/images/BP23/back1.jpg","./assets/images/BP23/back2.jpg","./assets/images/BP23/back3.jpg",
              "./assets/images/BP23/back4.jpg","./assets/images/BP23/back5.jpg","./assets/images/BP23/back6.jpg",
              "./assets/images/BP23/back7.jpg","./assets/images/BP23/back8.jpg","./assets/images/BP23/back9.jpg",
              "./assets/images/BP23/back10.jpg","./assets/images/BP23/back11.jpg","./assets/images/BP23/back12.jpg",
              "./assets/images/BP23/back13.jpg","./assets/images/BP23/back14.jpg","./assets/images/BP23/back15.jpg",
              "./assets/images/BP23/back16.jpg","./assets/images/BP23/back17.jpg","./assets/images/BP23/back18.jpg",
              "./assets/images/BP23/back19.jpg","./assets/images/BP23/back20.jpg","./assets/images/BP23/back21.jpg",
              "./assets/images/BP23/back22.jpg","./assets/images/BP23/back23.jpg","./assets/images/BP23/back24.jpg",
              "./assets/images/BP23/back25.jpg","./assets/images/BP23/back26.jpg","./assets/images/BP23/back27.jpg",
              "./assets/images/BP23/back28.jpg","./assets/images/BP23/back29.jpg","./assets/images/BP23/back30.jpg",
              "./assets/images/BP23/back31.jpg","./assets/images/BP23/back32.jpg","./assets/images/BP23/back33.jpg",
              "./assets/images/BP23/back34.jpg","./assets/images/BP23/back35.jpg","./assets/images/BP23/back36.jpg",
              "./assets/images/BP23/back37.jpg","./assets/images/BP23/back38.jpg","./assets/images/BP23/back39.jpg",
              "./assets/images/BP23/back40.jpg","./assets/images/BP23/back41.jpg","./assets/images/BP23/back42.jpg",
              "./assets/images/BP23/back43.jpg","./assets/images/BP23/back44.jpg","./assets/images/BP23/back45.jpg",
              "./assets/images/BP23/back46.jpg","./assets/images/BP23/back47.jpg","./assets/images/BP23/back48.jpg",
              "./assets/images/BP23/back49.jpg","./assets/images/BP23/back50.jpg","./assets/images/BP23/back51.jpg",
              "./assets/images/BP23/back52.jpg","./assets/images/BP23/back53.jpg","./assets/images/BP23/back54.jpg",
              "./assets/images/BP23/back55.jpg","./assets/images/BP23/back56.jpg","./assets/images/BP23/back57.jpg",
              "./assets/images/BP23/back58.jpg","./assets/images/BP23/back59.jpg","./assets/images/BP23/back60.PNG",
              "./assets/images/BP23/back61.jpg","./assets/images/BP23/back62.jpg","./assets/images/BP23/back63.jpg",
              "./assets/images/BP23/back64.jpg","./assets/images/BP23/back65.PNG"];

const WS23 = ["./assets/images/WS23/WS1.jpg","./assets/images/WS23/WS2.jpg","./assets/images/WS23/WS3.jpg",
              "./assets/images/WS23/WS4.jpg","./assets/images/WS23/WS5.jpg","./assets/images/WS23/WS6.jpg",
              "./assets/images/WS23/WS7.jpg","./assets/images/WS23/WS8.jpg","./assets/images/WS23/WS9.jpg",
              "./assets/images/WS23/WS10.jpg","./assets/images/WS23/WS11.jpg","./assets/images/WS23/WS12.jpg",
              "./assets/images/WS23/WS13.jpg","./assets/images/WS23/WS14.jpg","./assets/images/WS23/WS15.jpg",
              "./assets/images/WS23/WS16.jpg","./assets/images/WS23/WS17.jpg","./assets/images/WS23/WS18.jpg",
              "./assets/images/WS23/WS19.jpg","./assets/images/WS23/WS20.jpg","./assets/images/WS23/WS21.jpg",
              "./assets/images/WS23/WS22.jpg","./assets/images/WS23/WS23.jpg"];

const MD23 = ["./assets/images/MD23/MD1.jpg","./assets/images/MD23/MD2.jpg","./assets/images/MD23/MD3.jpg",
              "./assets/images/MD23/MD4.jpg","./assets/images/MD23/MD5.jpg","./assets/images/MD23/MD6.jpg",
              "./assets/images/MD23/MD7.jpg","./assets/images/MD23/MD8.jpg","./assets/images/MD23/MD9.jpg",
              "./assets/images/MD23/MD10.jpg","./assets/images/MD23/MD11.jpg","./assets/images/MD23/MD12.jpg",
              "./assets/images/MD23/MD13.jpg","./assets/images/MD23/MD14.jpg","./assets/images/MD23/MD15.jpg",
              "./assets/images/MD23/MD16.jpg","./assets/images/MD23/MD17.jpg","./assets/images/MD23/MD18.jpg",
              "./assets/images/MD23/MD19.jpg","./assets/images/MD23/MD20.jpg"];

const SCD0 = ["./assets/images/Summer_Camp23/Day0/Day0_1.jpg","./assets/images/Summer_Camp23/Day0/Day0_2.jpg","./assets/images/Summer_Camp23/Day0/Day0_3.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_4.jpg","./assets/images/Summer_Camp23/Day0/Day0_5.jpg","./assets/images/Summer_Camp23/Day0/Day0_6.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_7.jpg","./assets/images/Summer_Camp23/Day0/Day0_8.jpg","./assets/images/Summer_Camp23/Day0/Day0_9.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_10.jpg","./assets/images/Summer_Camp23/Day0/Day0_11.jpg","./assets/images/Summer_Camp23/Day0/Day0_12.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_13.jpg","./assets/images/Summer_Camp23/Day0/Day0_14.jpg","./assets/images/Summer_Camp23/Day0/Day0_15.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_16.jpg","./assets/images/Summer_Camp23/Day0/Day0_17.jpg","./assets/images/Summer_Camp23/Day0/Day0_18.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_19.jpg","./assets/images/Summer_Camp23/Day0/Day0_20.jpg","./assets/images/Summer_Camp23/Day0/Day0_21.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_22.jpg","./assets/images/Summer_Camp23/Day0/Day0_23.jpg","./assets/images/Summer_Camp23/Day0/Day0_24.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_25.jpg","./assets/images/Summer_Camp23/Day0/Day0_26.jpg","./assets/images/Summer_Camp23/Day0/Day0_27.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_28.jpg","./assets/images/Summer_Camp23/Day0/Day0_29.jpg","./assets/images/Summer_Camp23/Day0/Day0_30.jpg",
              "./assets/images/Summer_Camp23/Day0/Day0_31.jpg","./assets/images/Summer_Camp23/Day0/Day0_32.jpg","./assets/images/Summer_Camp23/Day0/Day0_33.jpg",];

const SCD1 = ["./assets/images/Summer_Camp23/Day1/Day1_1.jpg","./assets/images/Summer_Camp23/Day1/Day1_2.jpg","./assets/images/Summer_Camp23/Day1/Day1_3.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_4.jpg","./assets/images/Summer_Camp23/Day1/Day1_5.jpg","./assets/images/Summer_Camp23/Day1/Day1_6.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_7.jpg","./assets/images/Summer_Camp23/Day1/Day1_8.jpg","./assets/images/Summer_Camp23/Day1/Day1_9.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_10.jpg","./assets/images/Summer_Camp23/Day1/Day1_11.jpg","./assets/images/Summer_Camp23/Day1/Day1_12.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_13.jpg","./assets/images/Summer_Camp23/Day1/Day1_14.jpg","./assets/images/Summer_Camp23/Day1/Day1_15.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_16.jpg","./assets/images/Summer_Camp23/Day1/Day1_17.jpg","./assets/images/Summer_Camp23/Day1/Day1_18.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_19.jpg","./assets/images/Summer_Camp23/Day1/Day1_20.jpg","./assets/images/Summer_Camp23/Day1/Day1_21.jpg",
              "./assets/images/Summer_Camp23/Day1/Day1_22.jpg","./assets/images/Summer_Camp23/Day1/Day1_23.jpg","./assets/images/Summer_Camp23/Day1/Day1_24.jpg",];

const SCD2 = ["./assets/images/Summer_Camp23/Day2/Day2_1.jpg","./assets/images/Summer_Camp23/Day2/Day2_2.jpg","./assets/images/Summer_Camp23/Day2/Day2_3.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_4.jpg","./assets/images/Summer_Camp23/Day2/Day2_5.jpg","./assets/images/Summer_Camp23/Day2/Day2_6.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_7.jpg","./assets/images/Summer_Camp23/Day2/Day2_8.jpg","./assets/images/Summer_Camp23/Day2/Day2_9.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_10.jpg","./assets/images/Summer_Camp23/Day2/Day2_11.jpg","./assets/images/Summer_Camp23/Day2/Day2_12.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_13.jpg","./assets/images/Summer_Camp23/Day2/Day2_14.jpg","./assets/images/Summer_Camp23/Day2/Day2_15.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_16.jpg","./assets/images/Summer_Camp23/Day2/Day2_17.jpg","./assets/images/Summer_Camp23/Day2/Day2_18.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_19.jpg","./assets/images/Summer_Camp23/Day2/Day2_20.jpg","./assets/images/Summer_Camp23/Day2/Day2_21.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_22.jpg","./assets/images/Summer_Camp23/Day2/Day2_23.jpg","./assets/images/Summer_Camp23/Day2/Day2_24.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_25.jpg","./assets/images/Summer_Camp23/Day2/Day2_26.jpg","./assets/images/Summer_Camp23/Day2/Day2_27.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_28.jpg","./assets/images/Summer_Camp23/Day2/Day2_29.jpg","./assets/images/Summer_Camp23/Day2/Day2_30.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_31.jpg","./assets/images/Summer_Camp23/Day2/Day2_32.jpg","./assets/images/Summer_Camp23/Day2/Day2_33.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_34.jpg","./assets/images/Summer_Camp23/Day2/Day2_35.jpg","./assets/images/Summer_Camp23/Day2/Day2_36.jpg",
              "./assets/images/Summer_Camp23/Day2/Day2_37.jpg","./assets/images/Summer_Camp23/Day2/Day2_38.jpg",];

const SCD3 = ["./assets/images/Summer_Camp23/Day3/Day3_1.jpg","./assets/images/Summer_Camp23/Day3/Day3_2.jpg","./assets/images/Summer_Camp23/Day3/Day3_3.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_4.jpg","./assets/images/Summer_Camp23/Day3/Day3_5.jpg","./assets/images/Summer_Camp23/Day3/Day3_6.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_7.jpg","./assets/images/Summer_Camp23/Day3/Day3_8.jpg","./assets/images/Summer_Camp23/Day3/Day3_9.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_10.jpg","./assets/images/Summer_Camp23/Day3/Day3_11.jpg","./assets/images/Summer_Camp23/Day3/Day3_12.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_13.jpg","./assets/images/Summer_Camp23/Day3/Day3_14.jpg","./assets/images/Summer_Camp23/Day3/Day3_15.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_16.jpg","./assets/images/Summer_Camp23/Day3/Day3_17.jpg","./assets/images/Summer_Camp23/Day3/Day3_18.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_19.jpg","./assets/images/Summer_Camp23/Day3/Day3_20.jpg","./assets/images/Summer_Camp23/Day3/Day3_21.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_22.jpg","./assets/images/Summer_Camp23/Day3/Day3_23.jpg","./assets/images/Summer_Camp23/Day3/Day3_24.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_25.jpg","./assets/images/Summer_Camp23/Day3/Day3_26.jpg","./assets/images/Summer_Camp23/Day3/Day3_27.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_28.jpg","./assets/images/Summer_Camp23/Day3/Day3_29.jpg","./assets/images/Summer_Camp23/Day3/Day3_30.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_31.jpg","./assets/images/Summer_Camp23/Day3/Day3_32.jpg","./assets/images/Summer_Camp23/Day3/Day3_33.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_34.jpg","./assets/images/Summer_Camp23/Day3/Day3_35.jpg","./assets/images/Summer_Camp23/Day3/Day3_36.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_37.jpg","./assets/images/Summer_Camp23/Day3/Day3_38.jpg","./assets/images/Summer_Camp23/Day3/Day3_39.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_40.jpg","./assets/images/Summer_Camp23/Day3/Day3_41.jpg","./assets/images/Summer_Camp23/Day3/Day3_42.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_43.jpg","./assets/images/Summer_Camp23/Day3/Day3_44.jpg","./assets/images/Summer_Camp23/Day3/Day3_45.jpg",
              "./assets/images/Summer_Camp23/Day3/Day3_46.jpg","./assets/images/Summer_Camp23/Day3/Day3_47.jpg","./assets/images/Summer_Camp23/Day3/Day3_48.jpg",];

const SCD4 = ["./assets/images/Summer_Camp23/Day4/Day4_1.jpg","./assets/images/Summer_Camp23/Day4/Day4_2.jpg","./assets/images/Summer_Camp23/Day4/Day4_3.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_4.jpg","./assets/images/Summer_Camp23/Day4/Day4_5.jpg","./assets/images/Summer_Camp23/Day4/Day4_6.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_7.jpg","./assets/images/Summer_Camp23/Day4/Day4_8.jpg","./assets/images/Summer_Camp23/Day4/Day4_9.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_10.jpg","./assets/images/Summer_Camp23/Day4/Day4_11.jpg","./assets/images/Summer_Camp23/Day4/Day4_12.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_13.jpg","./assets/images/Summer_Camp23/Day4/Day4_14.jpg","./assets/images/Summer_Camp23/Day4/Day4_15.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_16.jpg","./assets/images/Summer_Camp23/Day4/Day4_17.jpg","./assets/images/Summer_Camp23/Day4/Day4_18.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_19.jpg","./assets/images/Summer_Camp23/Day4/Day4_20.jpg","./assets/images/Summer_Camp23/Day4/Day4_21.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_22.jpg","./assets/images/Summer_Camp23/Day4/Day4_23.jpg","./assets/images/Summer_Camp23/Day4/Day4_24.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_25.jpg","./assets/images/Summer_Camp23/Day4/Day4_26.jpg","./assets/images/Summer_Camp23/Day4/Day4_27.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_28.jpg","./assets/images/Summer_Camp23/Day4/Day4_29.jpg","./assets/images/Summer_Camp23/Day4/Day4_30.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_31.jpg","./assets/images/Summer_Camp23/Day4/Day4_32.jpg","./assets/images/Summer_Camp23/Day4/Day4_33.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_34.jpg","./assets/images/Summer_Camp23/Day4/Day4_35.jpg","./assets/images/Summer_Camp23/Day4/Day4_36.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_37.jpg","./assets/images/Summer_Camp23/Day4/Day4_38.jpg","./assets/images/Summer_Camp23/Day4/Day4_39.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_40.jpg","./assets/images/Summer_Camp23/Day4/Day4_41.jpg","./assets/images/Summer_Camp23/Day4/Day4_42.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_43.jpg","./assets/images/Summer_Camp23/Day4/Day4_44.jpg","./assets/images/Summer_Camp23/Day4/Day4_45.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_46.jpg","./assets/images/Summer_Camp23/Day4/Day4_47.jpg","./assets/images/Summer_Camp23/Day4/Day4_48.jpg",
              "./assets/images/Summer_Camp23/Day4/Day4_49.jpg","./assets/images/Summer_Camp23/Day4/Day4_50.jpg",];

const SCD5 = ["./assets/images/Summer_Camp23/Day5/Day5_1.jpg","./assets/images/Summer_Camp23/Day5/Day5_2.jpg","./assets/images/Summer_Camp23/Day5/Day5_3.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_4.jpg","./assets/images/Summer_Camp23/Day5/Day5_5.jpg","./assets/images/Summer_Camp23/Day5/Day5_6.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_7.jpg","./assets/images/Summer_Camp23/Day5/Day5_8.jpg","./assets/images/Summer_Camp23/Day5/Day5_9.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_10.jpg","./assets/images/Summer_Camp23/Day5/Day5_11.jpg","./assets/images/Summer_Camp23/Day5/Day5_12.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_13.jpg","./assets/images/Summer_Camp23/Day5/Day5_14.jpg","./assets/images/Summer_Camp23/Day5/Day5_15.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_16.jpg","./assets/images/Summer_Camp23/Day5/Day5_17.jpg","./assets/images/Summer_Camp23/Day5/Day5_18.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_19.jpg","./assets/images/Summer_Camp23/Day5/Day5_20.jpg","./assets/images/Summer_Camp23/Day5/Day5_21.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_22.jpg","./assets/images/Summer_Camp23/Day5/Day5_23.jpg","./assets/images/Summer_Camp23/Day5/Day5_24.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_25.jpg","./assets/images/Summer_Camp23/Day5/Day5_26.jpg","./assets/images/Summer_Camp23/Day5/Day5_27.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_28.jpg","./assets/images/Summer_Camp23/Day5/Day5_29.jpg","./assets/images/Summer_Camp23/Day5/Day5_30.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_32.jpg","./assets/images/Summer_Camp23/Day5/Day5_33.jpg","./assets/images/Summer_Camp23/Day5/Day5_34.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_35.jpg","./assets/images/Summer_Camp23/Day5/Day5_36.jpg","./assets/images/Summer_Camp23/Day5/Day5_37.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_38.jpg","./assets/images/Summer_Camp23/Day5/Day5_39.jpg","./assets/images/Summer_Camp23/Day5/Day5_40.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_41.jpg","./assets/images/Summer_Camp23/Day5/Day5_42.jpg","./assets/images/Summer_Camp23/Day5/Day5_43.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_44.jpg","./assets/images/Summer_Camp23/Day5/Day5_45.jpg","./assets/images/Summer_Camp23/Day5/Day5_46.jpg",
              "./assets/images/Summer_Camp23/Day5/Day5_47.jpg",];

const BEP23 = ["./assets/images/BEP23/Phase1/Eagle1.jpg","./assets/images/BEP23/Phase1/Eagle2.jpg","./assets/images/BEP23/Phase1/Eagle3.jpg",
               "./assets/images/BEP23/Phase1/Eagle4.jpg","./assets/images/BEP23/Phase1/Eagle5.jpg","./assets/images/BEP23/Phase1/Eagle6.jpg",
               "./assets/images/BEP23/Phase1/Eagle7.jpg","./assets/images/BEP23/Phase1/Eagle8.jpg","./assets/images/BEP23/Phase1/Eagle9.jpg",
               "./assets/images/BEP23/Phase1/Eagle10.jpg","./assets/images/BEP23/Phase1/Eagle11.jpg",];

const C23 = ["./assets/images/Cycling23/c1.jpg","./assets/images/Cycling23/c2.jpg","./assets/images/Cycling23/c3.jpg",
             "./assets/images/Cycling23/c4.jpg","./assets/images/Cycling23/c5.jpg","./assets/images/Cycling23/c6.jpg",
             "./assets/images/Cycling23/c8.jpg","./assets/images/Cycling23/c9.jpg","./assets/images/Cycling23/c10.jpg",
             "./assets/images/Cycling23/c11.jpg","./assets/images/Cycling23/c12.jpg","./assets/images/Cycling23/c13.jpg",
             "./assets/images/Cycling23/c14.jpg","./assets/images/Cycling23/c15.jpg","./assets/images/Cycling23/c16.jpg",
             "./assets/images/Cycling23/c17.jpg","./assets/images/Cycling23/c18.jpg","./assets/images/Cycling23/c19.jpg",
             "./assets/images/Cycling23/c20.jpg","./assets/images/Cycling23/c21.jpg","./assets/images/Cycling23/c22.jpg",
             "./assets/images/Cycling23/c23.jpg","./assets/images/Cycling23/c24.jpg","./assets/images/Cycling23/c25.jpg",
             "./assets/images/Cycling23/c26.jpg","./assets/images/Cycling23/c27.jpg","./assets/images/Cycling23/c28.jpg",
             "./assets/images/Cycling23/c29.jpg","./assets/images/Cycling23/c30.jpg","./assets/images/Cycling23/c31.jpg",
             "./assets/images/Cycling23/c32.jpg","./assets/images/Cycling23/c33.jpg","./assets/images/Cycling23/c34.jpg",
             "./assets/images/Cycling23/c35.jpg","./assets/images/Cycling23/c36.jpg","./assets/images/Cycling23/c37.jpg",
             "./assets/images/Cycling23/c38.jpg","./assets/images/Cycling23/c39.jpg","./assets/images/Cycling23/c40.jpg",
             "./assets/images/Cycling23/c41.jpg","./assets/images/Cycling23/c42.jpg","./assets/images/Cycling23/c43.jpg",
             "./assets/images/Cycling23/c44.jpg","./assets/images/Cycling23/c45.jpg","./assets/images/Cycling23/c46.jpg",];

const GEC23 = ["./assets/images/GEC23/GEC1.jpg","./assets/images/GEC23/GEC2.jpg","./assets/images/GEC23/GEC3.jpg",
               "./assets/images/GEC23/GEC4.jpg","./assets/images/GEC23/GEC5.jpg","./assets/images/GEC23/GEC6.jpg",
               "./assets/images/GEC23/GEC7.jpg","./assets/images/GEC23/GEC8.jpg","./assets/images/GEC23/GEC9.jpg",
               "./assets/images/GEC23/GEC10.jpg","./assets/images/GEC23/GEC11.jpg","./assets/images/GEC23/GEC12.jpg",
               "./assets/images/GEC23/GEC13.jpg","./assets/images/GEC23/GEC14.jpg","./assets/images/GEC23/GEC15.jpg",
               "./assets/images/GEC23/GEC16.jpg","./assets/images/GEC23/GEC17.jpg","./assets/images/GEC23/GEC18.jpg",
               "./assets/images/GEC23/GEC19.jpg","./assets/images/GEC23/GEC20.jpg","./assets/images/GEC23/GEC21.jpg",
               "./assets/images/GEC23/GEC22.jpg","./assets/images/GEC23/GEC23.jpg","./assets/images/GEC23/GEC24.jpg",
               "./assets/images/GEC23/GEC25.jpg","./assets/images/GEC23/GEC26.jpg","./assets/images/GEC23/GEC27.jpg",
               "./assets/images/GEC23/GEC28.jpg","./assets/images/GEC23/GEC29.jpg","./assets/images/GEC23/GEC30.jpg",];

const CT23 = ["./assets/images/CT23/CT1.jpg","./assets/images/CT23/CT2.jpg","./assets/images/CT23/CT3.jpg",
              "./assets/images/CT23/CT4.jpg","./assets/images/CT23/CT5.jpg","./assets/images/CT23/CT6.jpg",
              "./assets/images/CT23/CT7.jpg","./assets/images/CT23/CT8.jpg","./assets/images/CT23/CT9.jpg",
              "./assets/images/CT23/CT10.jpg","./assets/images/CT23/CT11.jpg","./assets/images/CT23/CT12.jpg",
              "./assets/images/CT23/CT13.jpg","./assets/images/CT23/CT14.jpg","./assets/images/CT23/CT15.jpg",
              "./assets/images/CT23/CT16.jpg","./assets/images/CT23/CT17.jpg","./assets/images/CT23/CT18.jpg",
              "./assets/images/CT23/CT19.jpg","./assets/images/CT23/CT20.jpg","./assets/images/CT23/CT21.jpg",
              "./assets/images/CT23/CT22.jpg","./assets/images/CT23/CT23.jpg","./assets/images/CT23/CT24.jpg",
              "./assets/images/CT23/CT25.jpg","./assets/images/CT23/CT26.jpg","./assets/images/CT23/CT27.jpg",
              "./assets/images/CT23/CT28.jpg","./assets/images/CT23/CT29.jpg","./assets/images/CT23/CT30.jpg",
              "./assets/images/CT23/CT31.jpg","./assets/images/CT23/CT32.jpg","./assets/images/CT23/CT33.jpg",
              "./assets/images/CT23/CT34.jpg","./assets/images/CT23/CT35.jpg","./assets/images/CT23/CT36.jpg",
              "./assets/images/CT23/CT37.jpg","./assets/images/CT23/CT38.jpg","./assets/images/CT23/CT39.jpg",
              "./assets/images/CT23/CT40.jpg","./assets/images/CT23/CT41.jpg","./assets/images/CT23/CT42.jpg",
              "./assets/images/CT23/CT43.jpg","./assets/images/CT23/CT44.jpg","./assets/images/CT23/CT45.jpg",
              "./assets/images/CT23/CT46.jpg","./assets/images/CT23/CT47.jpg","./assets/images/CT23/CT48.jpg",
              "./assets/images/CT23/CT49.jpg","./assets/images/CT23/CT50.jpg","./assets/images/CT23/CT51.jpg",
              "./assets/images/CT23/CT52.jpg","./assets/images/CT23/CT53.jpg","./assets/images/CT23/CT54.jpg",
              "./assets/images/CT23/CT55.jpg","./assets/images/CT23/CT56.jpg","./assets/images/CT23/CT57.jpg",
              "./assets/images/CT23/CT58.jpg","./assets/images/CT23/CT59.jpg","./assets/images/CT23/CT60.jpg",
              "./assets/images/CT23/CT61.jpg","./assets/images/CT23/CT62.jpg","./assets/images/CT23/CT63.jpg",
              "./assets/images/CT23/CT64.jpg","./assets/images/CT23/CT65.jpg","./assets/images/CT23/CT66.jpg",
              "./assets/images/CT23/CT67.jpg",];

const Mum23 = ["./assets/images/Mum23/mum1.jpg","./assets/images/Mum23/mum2.jpg","./assets/images/Mum23/mum3.jpg",
               "./assets/images/Mum23/mum4.jpg","./assets/images/Mum23/mum5.jpg","./assets/images/Mum23/mum6.jpg",
               "./assets/images/Mum23/mum7.jpg","./assets/images/Mum23/mum8.jpg","./assets/images/Mum23/mum9.jpg",
               "./assets/images/Mum23/mum10.jpg","./assets/images/Mum23/mum11.jpg","./assets/images/Mum23/mum12.jpg",
               "./assets/images/Mum23/mum13.jpg","./assets/images/Mum23/mum14.jpg","./assets/images/Mum23/mum15.jpg",
               "./assets/images/Mum23/mum16.jpg","./assets/images/Mum23/mum17.jpg","./assets/images/Mum23/mum18.jpg",
               "./assets/images/Mum23/mum19.jpg","./assets/images/Mum23/mum20.jpg","./assets/images/Mum23/mum21.jpg",
               "./assets/images/Mum23/mum22.jpg","./assets/images/Mum23/mum23.jpg","./assets/images/Mum23/mum24.jpg",
               "./assets/images/Mum23/mum25.jpg","./assets/images/Mum23/mum26.jpg","./assets/images/Mum23/mum27.jpg",
               "./assets/images/Mum23/mum28.jpg","./assets/images/Mum23/mum29.jpg","./assets/images/Mum23/mum30.jpg",
               "./assets/images/Mum23/mum31.jpg","./assets/images/Mum23/mum32.jpg","./assets/images/Mum23/mum33.jpg",
               "./assets/images/Mum23/mum34.jpg","./assets/images/Mum23/mum35.jpg","./assets/images/Mum23/mum36.jpg",
               "./assets/images/Mum23/mum37.jpg","./assets/images/Mum23/cobbler1.jpg","./assets/images/Mum23/cobbler2.jpg",
               "./assets/images/Mum23/cobbler3.jpg","./assets/images/Mum23/cobbler4.jpg","./assets/images/Mum23/cobbler5.jpg",
               "./assets/images/Mum23/cobbler6.jpg","./assets/images/Mum23/cobbler7.jpg","./assets/images/Mum23/cobbler8.jpg",
               "./assets/images/Mum23/cobbler9.jpg","./assets/images/Mum23/cobbler10.jpg","./assets/images/Mum23/cobbler11.jpg",
               "./assets/images/Mum23/cobbler12.jpg","./assets/images/Mum23/cobbler13.jpg","./assets/images/Mum23/cobbler14.jpg",
               "./assets/images/Mum23/cobbler15.jpg","./assets/images/Mum23/cobbler16.jpg","./assets/images/Mum23/cobbler17.jpg",
               "./assets/images/Mum23/cobbler18.jpg","./assets/images/Mum23/cobbler19.jpg","./assets/images/Mum23/cobbler20.jpg",
               "./assets/images/Mum23/cobbler21.jpg","./assets/images/Mum23/cobbler22.jpg","./assets/images/Mum23/cobbler23.jpg",
               "./assets/images/Mum23/cobbler24.jpg","./assets/images/Mum23/cobbler25.jpg","./assets/images/Mum23/cobbler26.jpg",
               "./assets/images/Mum23/cobbler27.jpg","./assets/images/Mum23/cobbler28.jpg","./assets/images/Mum23/cobbler29.jpg",];

const BEP232 = ["./assets/images/BEP23/Phase2/Eagle1.jpg","./assets/images/BEP23/Phase2/Eagle2.jpg","./assets/images/BEP23/Phase2/Eagle3.jpg",
                "./assets/images/BEP23/Phase2/Eagle4.jpg","./assets/images/BEP23/Phase2/Eagle5.jpg","./assets/images/BEP23/Phase2/Eagle6.jpg",
                "./assets/images/BEP23/Phase2/Eagle7.jpg","./assets/images/BEP23/Phase2/Eagle8.jpg","./assets/images/BEP23/Phase2/Eagle9.jpg",
                "./assets/images/BEP23/Phase2/Eagle10.jpg","./assets/images/BEP23/Phase2/Eagle11.jpg","./assets/images/BEP23/Phase2/Eagle12.jpg",];

const IC23 = ["./assets/images/Climbing23/IC1.jpg","./assets/images/Climbing23/IC2.jpg","./assets/images/Climbing23/IC3.jpg",
              "./assets/images/Climbing23/IC4.jpg","./assets/images/Climbing23/IC5.jpg","./assets/images/Climbing23/IC6.jpg",
              "./assets/images/Climbing23/IC7.jpg","./assets/images/Climbing23/IC8.jpg","./assets/images/Climbing23/IC9.jpg",
              "./assets/images/Climbing23/IC10.jpg","./assets/images/Climbing23/IC11.jpg","./assets/images/Climbing23/IC12.jpg",
              "./assets/images/Climbing23/IC13.jpg",];

const JCH23 = ["./assets/images/JulyCH23/CH1.jpg","./assets/images/JulyCH23/CH2.jpg","./assets/images/JulyCH23/CH3.jpg",
             "./assets/images/JulyCH23/CH4.jpg","./assets/images/JulyCH23/CH5.jpg","./assets/images/JulyCH23/CH6.jpg",
             "./assets/images/JulyCH23/CH7.jpg","./assets/images/JulyCH23/CH8.jpg","./assets/images/JulyCH23/CH9.jpg",
             "./assets/images/JulyCH23/CH10.jpg","./assets/images/JulyCH23/CH11.jpg","./assets/images/JulyCH23/CH12.jpg",
             "./assets/images/JulyCH23/CH13.jpg","./assets/images/JulyCH23/CH14.jpg","./assets/images/JulyCH23/CH15.jpg",
             "./assets/images/JulyCH23/CH16.jpg","./assets/images/JulyCH23/CH17.jpg","./assets/images/JulyCH23/CH18.jpg",
             "./assets/images/JulyCH23/CH19.jpg","./assets/images/JulyCH23/CH20.jpg","./assets/images/JulyCH23/CH21.jpg",
             "./assets/images/JulyCH23/CH22.jpg","./assets/images/JulyCH23/CH23.jpg","./assets/images/JulyCH23/CH24.jpg",
             "./assets/images/JulyCH23/CH25.jpg","./assets/images/JulyCH23/CH26.jpg","./assets/images/JulyCH23/CH27.jpg",
             "./assets/images/JulyCH23/CH28.jpg","./assets/images/JulyCH23/CH29.jpg","./assets/images/JulyCH23/CH30.jpg",];

const FP23 = ["./assets/images/FirePit23/FP1.jpg","./assets/images/FirePit23/FP2.jpg","./assets/images/FirePit23/FP3.jpg",
              "./assets/images/FirePit23/FP4.jpg","./assets/images/FirePit23/FP5.jpg","./assets/images/FirePit23/FP6.jpg",
              "./assets/images/FirePit23/FP7.jpg","./assets/images/FirePit23/FP8.jpg","./assets/images/FirePit23/FP9.jpg",
              "./assets/images/FirePit23/FP10.jpg","./assets/images/FirePit23/FP11.jpg","./assets/images/FirePit23/FP12.jpg",
              "./assets/images/FirePit23/FP13.jpg","./assets/images/FirePit23/FP14.jpg","./assets/images/FirePit23/FP15.jpg",
              "./assets/images/FirePit23/FP16.jpg","./assets/images/FirePit23/FP17.jpg","./assets/images/FirePit23/FP18.jpg",
              "./assets/images/FirePit23/FP19.jpg","./assets/images/FirePit23/FP20.jpg","./assets/images/FirePit23/FP21.jpg",];

const TB23 = ["./assets/images/TB23/TB1.jpg","./assets/images/TB23/TB2.jpg","./assets/images/TB23/TB3.jpg",
              "./assets/images/TB23/TB4.jpg","./assets/images/TB23/TB5.jpg","./assets/images/TB23/TB6.jpg",
              "./assets/images/TB23/TB7.jpg","./assets/images/TB23/TB8.jpg","./assets/images/TB23/TB9.jpg",
              "./assets/images/TB23/TB10.jpg","./assets/images/TB23/TB11.jpg","./assets/images/TB23/TB12.jpg",
              "./assets/images/TB23/TB13.jpg","./assets/images/TB23/TB14.jpg","./assets/images/TB23/TB15.jpg",
              "./assets/images/TB23/TB16.jpg","./assets/images/TB23/TB17.jpg","./assets/images/TB23/TB18.jpg",
              "./assets/images/TB23/TB19.jpg","./assets/images/TB23/TB20.jpg","./assets/images/TB23/TB21.jpg",
              "./assets/images/TB23/TB22.jpg","./assets/images/TB23/TB23.jpg","./assets/images/TB23/TB24.jpg",
              "./assets/images/TB23/TB25.jpg","./assets/images/TB23/TB26.jpg","./assets/images/TB23/TB27.jpg",
              "./assets/images/TB23/TB28.jpg","./assets/images/TB23/TB29.jpg","./assets/images/TB23/TB30.jpg",
              "./assets/images/TB23/TB31.jpg","./assets/images/TB23/TB32.jpg","./assets/images/TB23/TB33.jpg",
              "./assets/images/TB23/TB34.jpg","./assets/images/TB23/TB35.jpg","./assets/images/TB23/TB36.jpg",
              "./assets/images/TB23/TB37.jpg","./assets/images/TB23/TB38.jpg","./assets/images/TB23/TB39.jpg",
              "./assets/images/TB23/TB40.jpg","./assets/images/TB23/TB41.jpg","./assets/images/TB23/TB42.jpg",
              "./assets/images/TB23/TB43.jpg","./assets/images/TB23/TB44.jpg","./assets/images/TB23/TB45.jpg",
              "./assets/images/TB23/TB46.jpg","./assets/images/TB23/TB47.jpg","./assets/images/TB23/TB48.jpg",
              "./assets/images/TB23/TB49.jpg","./assets/images/TB23/TB50.jpg","./assets/images/TB23/TB51.jpg",
              "./assets/images/TB23/TB52.jpg","./assets/images/TB23/TB53.jpg","./assets/images/TB23/TB54.jpg",
              "./assets/images/TB23/TB55.jpg","./assets/images/TB23/TB56.jpg","./assets/images/TB23/TB57.jpg",];

const AP23 = ["./assets/images/AP23/AP1.jpg","./assets/images/AP23/AP2.jpg","./assets/images/AP23/AP3.jpg",
              "./assets/images/AP23/AP4.jpg","./assets/images/AP23/AP5.jpg","./assets/images/AP23/AP6.jpg",
              "./assets/images/AP23/AP7.jpg","./assets/images/AP23/AP8.jpg","./assets/images/AP23/AP9.jpg",
              "./assets/images/AP23/AP10.jpg","./assets/images/AP23/AP11.jpg","./assets/images/AP23/AP12.jpg",
              "./assets/images/AP23/AP13.jpg","./assets/images/AP23/AP14.jpg","./assets/images/AP23/AP15.jpg",
              "./assets/images/AP23/AP16.jpg","./assets/images/AP23/AP17.jpg","./assets/images/AP23/AP18.jpg",
              "./assets/images/AP23/AP19.jpg","./assets/images/AP23/AP20.jpg","./assets/images/AP23/AP21.jpg",
              "./assets/images/AP23/AP22.jpg","./assets/images/AP23/AP23.jpg","./assets/images/AP23/AP24.jpg",
              "./assets/images/AP23/AP25.jpg","./assets/images/AP23/AP26.jpg","./assets/images/AP23/AP27.jpg",
              "./assets/images/AP23/AP28.jpg","./assets/images/AP23/AP29.jpg","./assets/images/AP23/AP30.jpg",
              "./assets/images/AP23/AP31.jpg","./assets/images/AP23/AP32.jpg","./assets/images/AP23/AP33.jpg",
              "./assets/images/AP23/AP34.jpg","./assets/images/AP23/AP35.jpg","./assets/images/AP23/AP36.jpg",
              "./assets/images/AP23/AP37.jpg","./assets/images/AP23/AP38.jpg","./assets/images/AP23/AP39.jpg",
              "./assets/images/AP23/AP40.jpg","./assets/images/AP23/AP41.jpg","./assets/images/AP23/AP42.jpg",
              "./assets/images/AP23/AP43.jpg","./assets/images/AP23/AP44.jpg","./assets/images/AP23/AP45.jpg",
              "./assets/images/AP23/AP46.jpg","./assets/images/AP23/AP47.jpg","./assets/images/AP23/AP48.jpg",
              "./assets/images/AP23/AP49.jpg","./assets/images/AP23/AP50.jpg","./assets/images/AP23/AP51.jpg",
              "./assets/images/AP23/AP52.jpg","./assets/images/AP23/AP53.jpg","./assets/images/AP23/AP54.jpg",
              "./assets/images/AP23/AP55.jpg","./assets/images/AP23/AP56.jpg","./assets/images/AP23/AP57.jpg",
              "./assets/images/AP23/AP58.jpg","./assets/images/AP23/AP59.jpg","./assets/images/AP23/AP60.jpg",];

const DCH23 = ["./assets/images/DCH23/DCH1.jpg","./assets/images/DCH23/DCH2.jpg","./assets/images/DCH23/DCH3.jpg",
               "./assets/images/DCH23/DCH4.jpg","./assets/images/DCH23/DCH5.jpg","./assets/images/DCH23/DCH6.jpg",
               "./assets/images/DCH23/DCH7.jpg","./assets/images/DCH23/DCH8.jpg","./assets/images/DCH23/DCH9.jpg",
               "./assets/images/DCH23/DCH10.jpg","./assets/images/DCH23/DCH11.jpg","./assets/images/DCH23/DCH12.jpg",
               "./assets/images/DCH23/DCH13.jpg","./assets/images/DCH23/DCH14.jpg","./assets/images/DCH23/DCH15.jpg",
               "./assets/images/DCH23/DCH16.jpg","./assets/images/DCH23/DCH17.jpg","./assets/images/DCH23/DCH18.jpg",
               "./assets/images/DCH23/DCH19.jpg","./assets/images/DCH23/DCH20.jpg","./assets/images/DCH23/DCH21.jpg",
               "./assets/images/DCH23/DCH22.jpg","./assets/images/DCH23/DCH23.jpg","./assets/images/DCH23/DCH24.jpg",
               "./assets/images/DCH23/DCH25.jpg","./assets/images/DCH23/DCH26.jpg","./assets/images/DCH23/DCH27.jpg",
               "./assets/images/DCH23/DCH28.jpg","./assets/images/DCH23/DCH29.jpg","./assets/images/DCH23/DCH30.jpg",
               "./assets/images/DCH23/DCH31.jpg","./assets/images/DCH23/DCH32.jpg","./assets/images/DCH23/DCH33.jpg",];

const TOB24 = ["./assets/images/TOB24/TOB1.jpg","./assets/images/TOB24/TOB2.jpg","./assets/images/TOB24/TOB3.jpg",
               "./assets/images/TOB24/TOB4.jpg","./assets/images/TOB24/TOB5.jpg","./assets/images/TOB24/TOB6.jpg",
               "./assets/images/TOB24/TOB7.jpg","./assets/images/TOB24/TOB8.jpg","./assets/images/TOB24/TOB9.jpg",
               "./assets/images/TOB24/TOB10.jpg","./assets/images/TOB24/TOB11.jpg","./assets/images/TOB24/TOB12.jpg",
               "./assets/images/TOB24/TOB13.jpg","./assets/images/TOB24/TOB14.jpg","./assets/images/TOB24/TOB15.jpg",
               "./assets/images/TOB24/TOB16.jpg","./assets/images/TOB24/TOB17.jpg","./assets/images/TOB24/TOB18.jpg",
               "./assets/images/TOB24/TOB19.jpg","./assets/images/TOB24/TOB20.jpg","./assets/images/TOB24/TOB21.jpg",
               "./assets/images/TOB24/TOB22.jpg","./assets/images/TOB24/TOB23.jpg","./assets/images/TOB24/TOB24.jpg",
               "./assets/images/TOB24/TOB25.jpg","./assets/images/TOB24/TOB26.jpg","./assets/images/TOB24/TOB27.jpg",
               "./assets/images/TOB24/TOB28.jpg","./assets/images/TOB24/TOB29.jpg","./assets/images/TOB24/TOB30.jpg",
               "./assets/images/TOB24/TOB31.jpg","./assets/images/TOB24/TOB32.jpg","./assets/images/TOB24/TOB33.jpg",
               "./assets/images/TOB24/TOB34.jpg","./assets/images/TOB24/TOB35.jpg","./assets/images/TOB24/TOB36.jpg",
               "./assets/images/TOB24/TOB37.jpg","./assets/images/TOB24/TOB38.jpg","./assets/images/TOB24/TOB39.jpg",
               "./assets/images/TOB24/TOB40.jpg","./assets/images/TOB24/TOB41.jpg","./assets/images/TOB24/TOB42.jpg",
               "./assets/images/TOB24/TOB43.jpg","./assets/images/TOB24/TOB44.jpg","./assets/images/TOB24/TOB45.jpg",
               "./assets/images/TOB24/TOB46.jpg","./assets/images/TOB24/TOB47.jpg","./assets/images/TOB24/TOB48.jpg",
               "./assets/images/TOB24/TOB49.jpg","./assets/images/TOB24/TOB50.jpg",];

const CO28524 = ["./assets/images/285crossover24/crossover1.jpg","./assets/images/285crossover24/crossover2.jpg","./assets/images/285crossover24/crossover3.jpg",
                 "./assets/images/285crossover24/crossover4.jpg","./assets/images/285crossover24/crossover5.jpg","./assets/images/285crossover24/crossover6.jpg",
                 "./assets/images/285crossover24/crossover7.jpg","./assets/images/285crossover24/crossover8.jpg","./assets/images/285crossover24/crossover9.jpg",
                 "./assets/images/285crossover24/crossover10.jpg","./assets/images/285crossover24/crossover11.jpg","./assets/images/285crossover24/crossover12.jpg",
                 "./assets/images/285crossover24/crossover13.jpg","./assets/images/285crossover24/crossover14.jpg","./assets/images/285crossover24/crossover15.jpg",
                 "./assets/images/285crossover24/crossover16.jpg","./assets/images/285crossover24/crossover17.jpg","./assets/images/285crossover24/crossover18.jpg",
                 "./assets/images/285crossover24/crossover19.jpg","./assets/images/285crossover24/crossover20.jpg","./assets/images/285crossover24/crossover21.jpg",
                 "./assets/images/285crossover24/crossover22.jpg","./assets/images/285crossover24/crossover23.jpg","./assets/images/285crossover24/crossover24.jpg",
                 "./assets/images/285crossover24/crossover25.jpg","./assets/images/285crossover24/crossover26.jpg","./assets/images/285crossover24/crossover27.jpg",
                 "./assets/images/285crossover24/crossover28.jpg","./assets/images/285crossover24/crossover29.jpg","./assets/images/285crossover24/crossover30.jpg",
                 "./assets/images/285crossover24/crossover31.jpg","./assets/images/285crossover24/crossover32.jpg","./assets/images/285crossover24/crossover33.jpg",
                 "./assets/images/285crossover24/crossover34.jpg","./assets/images/285crossover24/crossover35.jpg","./assets/images/285crossover24/crossover36.jpg",
                 "./assets/images/285crossover24/crossover37.jpg","./assets/images/285crossover24/crossover38.jpg",];

const SS24 = ["./assets/images/Scout-Sunday24/sunday1.jpg","./assets/images/Scout-Sunday24/sunday2.jpg","./assets/images/Scout-Sunday24/sunday3.jpg",
              "./assets/images/Scout-Sunday24/sunday4.jpg","./assets/images/Scout-Sunday24/sunday5.jpg","./assets/images/Scout-Sunday24/sunday6.jpg",
              "./assets/images/Scout-Sunday24/sunday7.jpg","./assets/images/Scout-Sunday24/sunday8.jpg","./assets/images/Scout-Sunday24/sunday9.jpg",
              "./assets/images/Scout-Sunday24/sunday10.jpg","./assets/images/Scout-Sunday24/sunday11.jpg","./assets/images/Scout-Sunday24/sunday12.jpg",
              "./assets/images/Scout-Sunday24/sunday13.jpg","./assets/images/Scout-Sunday24/sunday14.jpg","./assets/images/Scout-Sunday24/sunday15.jpg",
              "./assets/images/Scout-Sunday24/sunday16.jpg","./assets/images/Scout-Sunday24/sunday17.jpg","./assets/images/Scout-Sunday24/sunday18.jpg",
              "./assets/images/Scout-Sunday24/sunday19.jpg",];

const RLFA24 = ["./assets/images/RLFA24/rlfa1.jpg","./assets/images/RLFA24/rlfa2.jpg","./assets/images/RLFA24/rlfa3.jpg",
                "./assets/images/RLFA24/rlfa4.jpg","./assets/images/RLFA24/rlfa5.jpg","./assets/images/RLFA24/rlfa6.jpg",
                "./assets/images/RLFA24/rlfa7.jpg","./assets/images/RLFA24/rlfa8.jpg","./assets/images/RLFA24/rlfa9.jpg",
                "./assets/images/RLFA24/rlfa10.jpg","./assets/images/RLFA24/rlfa11.jpg","./assets/images/RLFA24/rlfa12.jpg",
                "./assets/images/RLFA24/rlfa13.jpg","./assets/images/RLFA24/rlfa14.jpg","./assets/images/RLFA24/rlfa15.jpg",
                "./assets/images/RLFA24/rlfa16.jpg","./assets/images/RLFA24/rlfa17.jpg","./assets/images/RLFA24/rlfa18.jpg",
                "./assets/images/RLFA24/rlfa19.jpg","./assets/images/RLFA24/rlfa20.jpg","./assets/images/RLFA24/rlfa21.jpg",
                "./assets/images/RLFA24/rlfa22.jpg","./assets/images/RLFA24/rlfa23.jpg","./assets/images/RLFA24/rlfa24.jpg",
                "./assets/images/RLFA24/rlfa25.jpg","./assets/images/RLFA24/rlfa26.jpg","./assets/images/RLFA24/rlfa27.jpg",
                "./assets/images/RLFA24/rlfa28.jpg","./assets/images/RLFA24/rlfa29.jpg","./assets/images/RLFA24/rlfa30.jpg",
                "./assets/images/RLFA24/rlfa31.jpg","./assets/images/RLFA24/rlfa32.jpg","./assets/images/RLFA24/rlfa33.jpg",
                "./assets/images/RLFA24/rlfa34.jpg","./assets/images/RLFA24/rlfa35.jpg","./assets/images/RLFA24/rlfa36.jpg",
                "./assets/images/RLFA24/rlfa37.jpg","./assets/images/RLFA24/rlfa38.jpg","./assets/images/RLFA24/rlfa39.jpg",
                "./assets/images/RLFA24/rlfa40.jpg","./assets/images/RLFA24/rlfa41.jpg","./assets/images/RLFA24/rlfa42.jpg",
                "./assets/images/RLFA24/rlfa43.jpg","./assets/images/RLFA24/rlfa44.jpg",];

const SFF24 = ["./assets/images/SFF24/sff1.jpg","./assets/images/SFF24/sff2.jpg","./assets/images/SFF24/sff3.jpg",
               "./assets/images/SFF24/sff4.jpg","./assets/images/SFF24/sff5.jpg","./assets/images/SFF24/sff6.jpg",
               "./assets/images/SFF24/sff7.jpg","./assets/images/SFF24/sff8.jpg","./assets/images/SFF24/sff9.jpg",
               "./assets/images/SFF24/sff10.jpg","./assets/images/SFF24/sff11.jpg","./assets/images/SFF24/sff12.jpg",
               "./assets/images/SFF24/sff13.jpg","./assets/images/SFF24/sff14.jpg","./assets/images/SFF24/sff15.jpg",
               "./assets/images/SFF24/sff16.jpg","./assets/images/SFF24/sff17.jpg","./assets/images/SFF24/sff18.jpg",];

const IFLY24 = ["./assets/images/IFly24/ifly1.jpg","./assets/images/IFly24/ifly2.jpg","./assets/images/IFly24/ifly3.jpg",
                "./assets/images/IFly24/ifly4.jpg","./assets/images/IFly24/ifly5.jpg","./assets/images/IFly24/ifly6.jpg",
                "./assets/images/IFly24/ifly7.jpg","./assets/images/IFly24/ifly8.jpg","./assets/images/IFly24/ifly9.jpg",
                "./assets/images/IFly24/ifly10.jpg","./assets/images/IFly24/ifly11.jpg","./assets/images/IFly24/ifly12.jpg",
                "./assets/images/IFly24/ifly13.jpg","./assets/images/IFly24/ifly14.jpg","./assets/images/IFly24/ifly15.jpg",
                "./assets/images/IFly24/ifly16.jpg","./assets/images/IFly24/ifly17.jpg","./assets/images/IFly24/ifly18.jpg",
                "./assets/images/IFly24/ifly19.jpg","./assets/images/IFly24/ifly20.jpg","./assets/images/IFly24/ifly21.jpg",
                "./assets/images/IFly24/ifly22.jpg","./assets/images/IFly24/ifly23.jpg","./assets/images/IFly24/ifly24.jpg",
                "./assets/images/IFly24/ifly25.jpg","./assets/images/IFly24/ifly26.jpg","./assets/images/IFly24/ifly27.jpg",
                "./assets/images/IFly24/ifly28.jpg","./assets/images/IFly24/ifly29.jpg","./assets/images/IFly24/ifly30.jpg",
                "./assets/images/IFly24/ifly31.jpg","./assets/images/IFly24/ifly32.jpg","./assets/images/IFly24/ifly33.jpg",
                "./assets/images/IFly24/ifly34.jpg","./assets/images/IFly24/ifly35.jpg","./assets/images/IFly24/ifly36.jpg",
                "./assets/images/IFly24/ifly37.jpg","./assets/images/IFly24/ifly38.jpg","./assets/images/IFly24/ifly39.jpg",
                "./assets/images/IFly24/ifly40.jpg","./assets/images/IFly24/ifly41.jpg","./assets/images/IFly24/ifly42.jpg",
                "./assets/images/IFly24/ifly43.jpg","./assets/images/IFly24/ifly44.jpg","./assets/images/IFly24/ifly45.jpg",
                "./assets/images/IFly24/ifly46.jpg","./assets/images/IFly24/ifly47.jpg","./assets/images/IFly24/ifly48.jpg",
                "./assets/images/IFly24/ifly49.jpg","./assets/images/IFly24/ifly50.jpg","./assets/images/IFly24/ifly51.jpg",
                "./assets/images/IFly24/ifly52.jpg","./assets/images/IFly24/ifly53.jpg","./assets/images/IFly24/ifly54.jpg",
                "./assets/images/IFly24/ifly55.jpg","./assets/images/IFly24/ifly56.jpg","./assets/images/IFly24/ifly57.jpg",];

const Fish24 = ["./assets/images/Fish24/fish1.jpg","./assets/images/Fish24/fish2.jpg","./assets/images/Fish24/fish3.jpg",
                "./assets/images/Fish24/fish4.jpg","./assets/images/Fish24/fish5.jpg","./assets/images/Fish24/fish6.jpg",
                "./assets/images/Fish24/fish7.jpg","./assets/images/Fish24/fish8.jpg","./assets/images/Fish24/fish9.jpg",
                "./assets/images/Fish24/fish10.jpg","./assets/images/Fish24/fish11.jpg","./assets/images/Fish24/fish12.jpg",
                "./assets/images/Fish24/fish13.jpg","./assets/images/Fish24/fish15.jpg","./assets/images/Fish24/fish16.jpg",
                "./assets/images/Fish24/fish17.jpg","./assets/images/Fish24/fish18.jpg","./assets/images/Fish24/fish19.jpg",
                "./assets/images/Fish24/fish20.jpg","./assets/images/Fish24/fish21.jpg","./assets/images/Fish24/fish22.jpg",
                "./assets/images/Fish24/fish23.jpg","./assets/images/Fish24/fish24.jpg","./assets/images/Fish24/fish25.jpg",
                "./assets/images/Fish24/fish26.jpg","./assets/images/Fish24/fish27.jpg","./assets/images/Fish24/fish28.jpg",
                "./assets/images/Fish24/fish29.jpg","./assets/images/Fish24/fish30.jpg","./assets/images/Fish24/fish31.jpg",
                "./assets/images/Fish24/fish32.jpg","./assets/images/Fish24/fish33.jpg","./assets/images/Fish24/fish34.jpg",
                "./assets/images/Fish24/fish35.jpg","./assets/images/Fish24/fish36.jpg","./assets/images/Fish24/fish37.jpg",
                "./assets/images/Fish24/fish38.jpg","./assets/images/Fish24/fish39.jpg","./assets/images/Fish24/fish40.jpg",
                "./assets/images/Fish24/fish41.jpg","./assets/images/Fish24/fish42.jpg","./assets/images/Fish24/fish43.jpg",
                "./assets/images/Fish24/fish44.jpg","./assets/images/Fish24/fish45.jpg","./assets/images/Fish24/fish46.jpg",
                "./assets/images/Fish24/fish47.jpg","./assets/images/Fish24/fish48.jpg","./assets/images/Fish24/fish49.jpg",
                "./assets/images/Fish24/fish50.jpg","./assets/images/Fish24/fish51.jpg","./assets/images/Fish24/fish52.jpg",
                "./assets/images/Fish24/fish53.jpg","./assets/images/Fish24/fish54.jpg","./assets/images/Fish24/fish55.jpg",
                "./assets/images/Fish24/fish56.jpg","./assets/images/Fish24/fish57.jpg","./assets/images/Fish24/fish58.jpg",
                "./assets/images/Fish24/fish59.jpg","./assets/images/Fish24/fish60.jpg","./assets/images/Fish24/fish61.jpg",
                "./assets/images/Fish24/fish62.jpg","./assets/images/Fish24/fish63.jpg","./assets/images/Fish24/fish64.jpg",
                "./assets/images/Fish24/fish65.jpg","./assets/images/Fish24/fish66.jpg","./assets/images/Fish24/fish67.jpg",
                "./assets/images/Fish24/fish68.jpg","./assets/images/Fish24/fish69.jpg","./assets/images/Fish24/fish70.jpg",
                "./assets/images/Fish24/fish71.jpg","./assets/images/Fish24/fish72.jpg","./assets/images/Fish24/fish73.jpg",
                "./assets/images/Fish24/fish74.jpg",];

const MD24 = ["./assets/images/MD24/md1.jpg","./assets/images/MD24/md2.jpg","./assets/images/MD24/md3.jpg",
              "./assets/images/MD24/md4.jpg","./assets/images/MD24/md5.jpg","./assets/images/MD24/md6.jpg",
              "./assets/images/MD24/md7.jpg","./assets/images/MD24/md8.jpg","./assets/images/MD24/md9.jpg",
              "./assets/images/MD24/md10.jpg","./assets/images/MD24/md11.jpg",];

const Gaga24 = ["./assets/images/Gaga24/ball1.jpg","./assets/images/Gaga24/ball2.jpg","./assets/images/Gaga24/ball3.jpg",
                "./assets/images/Gaga24/ball4.jpg","./assets/images/Gaga24/ball5.jpg","./assets/images/Gaga24/ball6.jpg",
                "./assets/images/Gaga24/ball7.jpg","./assets/images/Gaga24/ball8.jpg","./assets/images/Gaga24/ball9.jpg",
                "./assets/images/Gaga24/ball10.jpg","./assets/images/Gaga24/ball11.jpg","./assets/images/Gaga24/ball12.jpg",
                "./assets/images/Gaga24/ball13.jpg","./assets/images/Gaga24/ball14.jpg","./assets/images/Gaga24/ball15.jpg",
                "./assets/images/Gaga24/ball16.jpg","./assets/images/Gaga24/ball17.jpg","./assets/images/Gaga24/ball18.jpg",
                "./assets/images/Gaga24/ball19.jpg","./assets/images/Gaga24/ball20.jpg","./assets/images/Gaga24/ball21.jpg",
                "./assets/images/Gaga24/ball22.jpg","./assets/images/Gaga24/ball23.jpg","./assets/images/Gaga24/ball24.jpg",
                "./assets/images/Gaga24/ball25.jpg","./assets/images/Gaga24/ball26.jpg","./assets/images/Gaga24/ball27.jpg",
                "./assets/images/Gaga24/ball28.jpg","./assets/images/Gaga24/ball29.jpg","./assets/images/Gaga24/ball30.jpg",
                "./assets/images/Gaga24/ball31.jpg","./assets/images/Gaga24/ball32.jpg","./assets/images/Gaga24/ball33.jpg",
                "./assets/images/Gaga24/ball34.jpg","./assets/images/Gaga24/ball35.jpg","./assets/images/Gaga24/ball36.jpg",
                "./assets/images/Gaga24/ball37.jpg","./assets/images/Gaga24/ball38.jpg","./assets/images/Gaga24/ball39.jpg",
                "./assets/images/Gaga24/ball40.jpg","./assets/images/Gaga24/ball41.jpg","./assets/images/Gaga24/ball42.jpg",
                "./assets/images/Gaga24/ball43.jpg","./assets/images/Gaga24/ball44.jpg","./assets/images/Gaga24/ball45.jpg",
                "./assets/images/Gaga24/ball46.jpg","./assets/images/Gaga24/ball47.jpg",];

const SCD024 = ["./assets/images/Summer_Camp24/Day0/1.jpg","./assets/images/Summer_Camp24/Day0/2.jpg","./assets/images/Summer_Camp24/Day0/3.jpg",
                "./assets/images/Summer_Camp24/Day0/4.jpg","./assets/images/Summer_Camp24/Day0/5.jpg","./assets/images/Summer_Camp24/Day0/6.jpg",
                "./assets/images/Summer_Camp24/Day0/7.jpg","./assets/images/Summer_Camp24/Day0/8.jpg","./assets/images/Summer_Camp24/Day0/9.jpg",
                "./assets/images/Summer_Camp24/Day0/10.jpg","./assets/images/Summer_Camp24/Day0/11.jpg","./assets/images/Summer_Camp24/Day0/12.jpg",
                "./assets/images/Summer_Camp24/Day0/13.jpg","./assets/images/Summer_Camp24/Day0/14.jpg","./assets/images/Summer_Camp24/Day0/15.jpg",
                "./assets/images/Summer_Camp24/Day0/16.jpg",];

const SCD124 = ["./assets/images/Summer_Camp24/Day1/1.jpg","./assets/images/Summer_Camp24/Day1/2.jpg","./assets/images/Summer_Camp24/Day1/3.jpg",
                "./assets/images/Summer_Camp24/Day1/4.jpg","./assets/images/Summer_Camp24/Day1/5.jpg","./assets/images/Summer_Camp24/Day1/6.jpg",
                "./assets/images/Summer_Camp24/Day1/7.jpg","./assets/images/Summer_Camp24/Day1/8.jpg","./assets/images/Summer_Camp24/Day1/9.jpg",
                "./assets/images/Summer_Camp24/Day1/10.jpg","./assets/images/Summer_Camp24/Day1/11.jpg","./assets/images/Summer_Camp24/Day1/12.jpg",
                "./assets/images/Summer_Camp24/Day1/13.jpg","./assets/images/Summer_Camp24/Day1/14.jpg","./assets/images/Summer_Camp24/Day1/15.jpg",
                "./assets/images/Summer_Camp24/Day1/16.jpg","./assets/images/Summer_Camp24/Day1/17.jpg","./assets/images/Summer_Camp24/Day1/18.jpg",
                "./assets/images/Summer_Camp24/Day1/19.jpg","./assets/images/Summer_Camp24/Day1/20.jpg","./assets/images/Summer_Camp24/Day1/21.jpg",
                "./assets/images/Summer_Camp24/Day1/22.jpg","./assets/images/Summer_Camp24/Day1/23.jpg","./assets/images/Summer_Camp24/Day1/24.jpg",
                "./assets/images/Summer_Camp24/Day1/25.jpg","./assets/images/Summer_Camp24/Day1/26.jpg","./assets/images/Summer_Camp24/Day1/27.jpg",
                "./assets/images/Summer_Camp24/Day1/28.jpg","./assets/images/Summer_Camp24/Day1/29.jpg","./assets/images/Summer_Camp24/Day1/30.jpg",
                "./assets/images/Summer_Camp24/Day1/31.jpg","./assets/images/Summer_Camp24/Day1/32.jpg","./assets/images/Summer_Camp24/Day1/33.jpg",
                "./assets/images/Summer_Camp24/Day1/34.jpg","./assets/images/Summer_Camp24/Day1/35.jpg","./assets/images/Summer_Camp24/Day1/36.jpg",];

const SCD224 = ["./assets/images/Summer_Camp24/Day2/1.jpg","./assets/images/Summer_Camp24/Day2/2.jpg","./assets/images/Summer_Camp24/Day2/3.jpg",
                "./assets/images/Summer_Camp24/Day2/4.jpg","./assets/images/Summer_Camp24/Day2/5.jpg","./assets/images/Summer_Camp24/Day2/6.jpg",
                "./assets/images/Summer_Camp24/Day2/7.jpg","./assets/images/Summer_Camp24/Day2/8.jpg","./assets/images/Summer_Camp24/Day2/9.jpg",
                "./assets/images/Summer_Camp24/Day2/10.jpg","./assets/images/Summer_Camp24/Day2/11.jpg","./assets/images/Summer_Camp24/Day2/12.jpg",
                "./assets/images/Summer_Camp24/Day2/13.jpg","./assets/images/Summer_Camp24/Day2/14.jpg","./assets/images/Summer_Camp24/Day2/15.jpg",
                "./assets/images/Summer_Camp24/Day2/16.jpg","./assets/images/Summer_Camp24/Day2/17.jpg","./assets/images/Summer_Camp24/Day2/18.jpg",
                "./assets/images/Summer_Camp24/Day2/19.jpg","./assets/images/Summer_Camp24/Day2/20.jpg","./assets/images/Summer_Camp24/Day2/21.jpg",
                "./assets/images/Summer_Camp24/Day2/22.jpg","./assets/images/Summer_Camp24/Day2/23.jpg","./assets/images/Summer_Camp24/Day2/24.jpg",
                "./assets/images/Summer_Camp24/Day2/25.jpg","./assets/images/Summer_Camp24/Day2/26.jpg","./assets/images/Summer_Camp24/Day2/27.jpg",
                "./assets/images/Summer_Camp24/Day2/28.jpg","./assets/images/Summer_Camp24/Day2/29.jpg","./assets/images/Summer_Camp24/Day2/30.jpg",
                "./assets/images/Summer_Camp24/Day2/31.jpg","./assets/images/Summer_Camp24/Day2/32.jpg","./assets/images/Summer_Camp24/Day2/33.jpg",
                "./assets/images/Summer_Camp24/Day2/34.jpg","./assets/images/Summer_Camp24/Day2/35.jpg","./assets/images/Summer_Camp24/Day2/36.jpg",
                "./assets/images/Summer_Camp24/Day2/37.jpg","./assets/images/Summer_Camp24/Day2/38.jpg","./assets/images/Summer_Camp24/Day2/39.jpg",
                "./assets/images/Summer_Camp24/Day2/40.jpg","./assets/images/Summer_Camp24/Day2/41.jpg","./assets/images/Summer_Camp24/Day2/42.jpg",
                "./assets/images/Summer_Camp24/Day2/43.jpg","./assets/images/Summer_Camp24/Day2/44.jpg","./assets/images/Summer_Camp24/Day2/45.jpg",
                "./assets/images/Summer_Camp24/Day2/46.jpg","./assets/images/Summer_Camp24/Day2/47.jpg","./assets/images/Summer_Camp24/Day2/48.jpg",
                "./assets/images/Summer_Camp24/Day2/49.jpg","./assets/images/Summer_Camp24/Day2/50.jpg","./assets/images/Summer_Camp24/Day2/51.jpg",
                "./assets/images/Summer_Camp24/Day2/52.jpg","./assets/images/Summer_Camp24/Day2/53.jpg","./assets/images/Summer_Camp24/Day2/54.jpg",];

const SCD324 = ["./assets/images/Summer_Camp24/Day3/1.jpg","./assets/images/Summer_Camp24/Day3/2.jpg","./assets/images/Summer_Camp24/Day3/3.jpg",
                "./assets/images/Summer_Camp24/Day3/4.jpg","./assets/images/Summer_Camp24/Day3/5.jpg","./assets/images/Summer_Camp24/Day3/6.jpg",
                "./assets/images/Summer_Camp24/Day3/7.jpg","./assets/images/Summer_Camp24/Day3/8.jpg","./assets/images/Summer_Camp24/Day3/9.jpg",
                "./assets/images/Summer_Camp24/Day3/10.jpg","./assets/images/Summer_Camp24/Day3/11.jpg","./assets/images/Summer_Camp24/Day3/12.jpg",
                "./assets/images/Summer_Camp24/Day3/13.jpg","./assets/images/Summer_Camp24/Day3/14.jpg","./assets/images/Summer_Camp24/Day3/15.jpg",
                "./assets/images/Summer_Camp24/Day3/16.jpg","./assets/images/Summer_Camp24/Day3/17.jpg","./assets/images/Summer_Camp24/Day3/18.jpg",
                "./assets/images/Summer_Camp24/Day3/19.jpg","./assets/images/Summer_Camp24/Day3/20.jpg","./assets/images/Summer_Camp24/Day3/21.jpg",
                "./assets/images/Summer_Camp24/Day3/22.jpg","./assets/images/Summer_Camp24/Day3/23.jpg","./assets/images/Summer_Camp24/Day3/24.jpg",
                "./assets/images/Summer_Camp24/Day3/25.jpg","./assets/images/Summer_Camp24/Day3/26.jpg","./assets/images/Summer_Camp24/Day3/27.jpg",
                "./assets/images/Summer_Camp24/Day3/28.jpg","./assets/images/Summer_Camp24/Day3/29.jpg","./assets/images/Summer_Camp24/Day3/30.jpg",
                "./assets/images/Summer_Camp24/Day3/31.jpg","./assets/images/Summer_Camp24/Day3/32.jpg","./assets/images/Summer_Camp24/Day3/33.jpg",
                "./assets/images/Summer_Camp24/Day3/34.jpg","./assets/images/Summer_Camp24/Day3/35.jpg","./assets/images/Summer_Camp24/Day3/36.jpg",
                "./assets/images/Summer_Camp24/Day3/37.jpg","./assets/images/Summer_Camp24/Day3/38.jpg","./assets/images/Summer_Camp24/Day3/39.jpg",
                "./assets/images/Summer_Camp24/Day3/40.jpg","./assets/images/Summer_Camp24/Day3/41.jpg","./assets/images/Summer_Camp24/Day3/42.jpg",
                "./assets/images/Summer_Camp24/Day3/43.jpg","./assets/images/Summer_Camp24/Day3/44.jpg","./assets/images/Summer_Camp24/Day3/45.jpg",
                "./assets/images/Summer_Camp24/Day3/46.jpg","./assets/images/Summer_Camp24/Day3/47.jpg","./assets/images/Summer_Camp24/Day3/48.jpg",
                "./assets/images/Summer_Camp24/Day3/49.jpg","./assets/images/Summer_Camp24/Day3/50.jpg","./assets/images/Summer_Camp24/Day3/51.jpg",
                "./assets/images/Summer_Camp24/Day3/52.jpg","./assets/images/Summer_Camp24/Day3/53.jpg","./assets/images/Summer_Camp24/Day3/54.jpg",
                "./assets/images/Summer_Camp24/Day3/55.jpg","./assets/images/Summer_Camp24/Day3/56.jpg","./assets/images/Summer_Camp24/Day3/57.jpg",
                "./assets/images/Summer_Camp24/Day3/58.jpg","./assets/images/Summer_Camp24/Day3/59.jpg","./assets/images/Summer_Camp24/Day3/60.jpg",
                "./assets/images/Summer_Camp24/Day3/61.jpg","./assets/images/Summer_Camp24/Day3/62.jpg","./assets/images/Summer_Camp24/Day3/63.jpg",
                "./assets/images/Summer_Camp24/Day3/64.jpg","./assets/images/Summer_Camp24/Day3/65.jpg","./assets/images/Summer_Camp24/Day3/66.jpg",
                "./assets/images/Summer_Camp24/Day3/67.jpg","./assets/images/Summer_Camp24/Day3/68.jpg","./assets/images/Summer_Camp24/Day3/69.jpg",
                "./assets/images/Summer_Camp24/Day3/70.jpg","./assets/images/Summer_Camp24/Day3/71.jpg","./assets/images/Summer_Camp24/Day3/72.jpg",
                "./assets/images/Summer_Camp24/Day3/73.jpg","./assets/images/Summer_Camp24/Day3/74.jpg","./assets/images/Summer_Camp24/Day3/75.jpg",
                "./assets/images/Summer_Camp24/Day3/76.jpg","./assets/images/Summer_Camp24/Day3/77.jpg","./assets/images/Summer_Camp24/Day3/78.jpg",
                "./assets/images/Summer_Camp24/Day3/79.jpg","./assets/images/Summer_Camp24/Day3/80.jpg","./assets/images/Summer_Camp24/Day3/81.jpg",
                "./assets/images/Summer_Camp24/Day3/82.jpg","./assets/images/Summer_Camp24/Day3/83.jpg","./assets/images/Summer_Camp24/Day3/84.jpg",
                "./assets/images/Summer_Camp24/Day3/85.jpg","./assets/images/Summer_Camp24/Day3/86.jpg","./assets/images/Summer_Camp24/Day3/87.jpg",
                "./assets/images/Summer_Camp24/Day3/88.jpg","./assets/images/Summer_Camp24/Day3/89.jpg","./assets/images/Summer_Camp24/Day3/90.jpg",
                "./assets/images/Summer_Camp24/Day3/91.jpg","./assets/images/Summer_Camp24/Day3/92.jpg","./assets/images/Summer_Camp24/Day3/93.jpg",
                "./assets/images/Summer_Camp24/Day3/94.jpg","./assets/images/Summer_Camp24/Day3/95.jpg","./assets/images/Summer_Camp24/Day3/96.jpg",
                "./assets/images/Summer_Camp24/Day3/97.jpg","./assets/images/Summer_Camp24/Day3/98.jpg","./assets/images/Summer_Camp24/Day3/99.jpg",
                "./assets/images/Summer_Camp24/Day3/100.jpg","./assets/images/Summer_Camp24/Day3/101.jpg","./assets/images/Summer_Camp24/Day3/102.jpg",
                "./assets/images/Summer_Camp24/Day3/103.jpg",];

const SCD424 = ["./assets/images/Summer_Camp24/Day4/1.jpg","./assets/images/Summer_Camp24/Day4/2.jpg","./assets/images/Summer_Camp24/Day4/3.jpg",
                "./assets/images/Summer_Camp24/Day4/4.jpg","./assets/images/Summer_Camp24/Day4/5.jpg","./assets/images/Summer_Camp24/Day4/6.jpg",
                "./assets/images/Summer_Camp24/Day4/7.jpg","./assets/images/Summer_Camp24/Day4/8.jpg","./assets/images/Summer_Camp24/Day4/9.jpg",
                "./assets/images/Summer_Camp24/Day4/10.jpg","./assets/images/Summer_Camp24/Day4/11.jpg","./assets/images/Summer_Camp24/Day4/12.jpg",
                "./assets/images/Summer_Camp24/Day4/13.jpg","./assets/images/Summer_Camp24/Day4/14.jpg","./assets/images/Summer_Camp24/Day4/15.jpg",
                "./assets/images/Summer_Camp24/Day4/16.jpg","./assets/images/Summer_Camp24/Day4/17.jpg","./assets/images/Summer_Camp24/Day4/18.jpg",
                "./assets/images/Summer_Camp24/Day4/19.jpg","./assets/images/Summer_Camp24/Day4/20.jpg","./assets/images/Summer_Camp24/Day4/21.jpg",
                "./assets/images/Summer_Camp24/Day4/22.jpg","./assets/images/Summer_Camp24/Day4/23.jpg","./assets/images/Summer_Camp24/Day4/24.jpg",
                "./assets/images/Summer_Camp24/Day4/25.jpg","./assets/images/Summer_Camp24/Day4/26.jpg","./assets/images/Summer_Camp24/Day4/27.jpg",
                "./assets/images/Summer_Camp24/Day4/28.jpg","./assets/images/Summer_Camp24/Day4/29.jpg","./assets/images/Summer_Camp24/Day4/30.jpg",
                "./assets/images/Summer_Camp24/Day4/31.jpg","./assets/images/Summer_Camp24/Day4/32.jpg","./assets/images/Summer_Camp24/Day4/33.jpg",
                "./assets/images/Summer_Camp24/Day4/34.jpg","./assets/images/Summer_Camp24/Day4/35.jpg","./assets/images/Summer_Camp24/Day4/36.jpg",
                "./assets/images/Summer_Camp24/Day4/37.jpg","./assets/images/Summer_Camp24/Day4/38.jpg","./assets/images/Summer_Camp24/Day4/39.jpg",
                "./assets/images/Summer_Camp24/Day4/40.jpg","./assets/images/Summer_Camp24/Day4/41.jpg","./assets/images/Summer_Camp24/Day4/42.jpg",
                "./assets/images/Summer_Camp24/Day4/43.jpg","./assets/images/Summer_Camp24/Day4/44.jpg","./assets/images/Summer_Camp24/Day4/45.jpg",
                "./assets/images/Summer_Camp24/Day4/46.jpg","./assets/images/Summer_Camp24/Day4/47.jpg","./assets/images/Summer_Camp24/Day4/48.jpg",
                "./assets/images/Summer_Camp24/Day4/49.jpg","./assets/images/Summer_Camp24/Day4/50.jpg","./assets/images/Summer_Camp24/Day4/51.jpg",
                "./assets/images/Summer_Camp24/Day4/52.jpg","./assets/images/Summer_Camp24/Day4/53.jpg","./assets/images/Summer_Camp24/Day4/54.jpg",
                "./assets/images/Summer_Camp24/Day4/55.jpg","./assets/images/Summer_Camp24/Day4/56.jpg","./assets/images/Summer_Camp24/Day4/57.jpg",
                "./assets/images/Summer_Camp24/Day4/58.jpg","./assets/images/Summer_Camp24/Day4/57.jpg","./assets/images/Summer_Camp24/Day4/60.jpg",
                "./assets/images/Summer_Camp24/Day4/61.jpg","./assets/images/Summer_Camp24/Day4/62.jpg","./assets/images/Summer_Camp24/Day4/63.jpg",
                "./assets/images/Summer_Camp24/Day4/64.jpg","./assets/images/Summer_Camp24/Day4/65.jpg","./assets/images/Summer_Camp24/Day4/66.jpg",
                "./assets/images/Summer_Camp24/Day4/67.jpg","./assets/images/Summer_Camp24/Day4/68.jpg","./assets/images/Summer_Camp24/Day4/69.jpg",
                "./assets/images/Summer_Camp24/Day4/70.jpg","./assets/images/Summer_Camp24/Day4/71.jpg","./assets/images/Summer_Camp24/Day4/72.jpg",
                "./assets/images/Summer_Camp24/Day4/73.jpg","./assets/images/Summer_Camp24/Day4/74.jpg","./assets/images/Summer_Camp24/Day4/75.jpg",
                "./assets/images/Summer_Camp24/Day4/76.jpg","./assets/images/Summer_Camp24/Day4/77.jpg","./assets/images/Summer_Camp24/Day4/78.jpg",
                "./assets/images/Summer_Camp24/Day4/79.jpg","./assets/images/Summer_Camp24/Day4/80.jpg","./assets/images/Summer_Camp24/Day4/81.jpg",
                "./assets/images/Summer_Camp24/Day4/82.jpg",];

const SCD524 = ["./assets/images/Summer_Camp24/Day5/1.jpg","./assets/images/Summer_Camp24/Day5/2.jpg","./assets/images/Summer_Camp24/Day5/3.jpg",
                "./assets/images/Summer_Camp24/Day5/4.jpg","./assets/images/Summer_Camp24/Day5/5.jpg","./assets/images/Summer_Camp24/Day5/6.jpg",
                "./assets/images/Summer_Camp24/Day5/7.jpg","./assets/images/Summer_Camp24/Day5/8.jpg","./assets/images/Summer_Camp24/Day5/9.jpg",
                "./assets/images/Summer_Camp24/Day5/10.jpg","./assets/images/Summer_Camp24/Day5/11.jpg","./assets/images/Summer_Camp24/Day5/12.jpg",
                "./assets/images/Summer_Camp24/Day5/13.jpg","./assets/images/Summer_Camp24/Day5/14.jpg","./assets/images/Summer_Camp24/Day5/15.jpg",
                "./assets/images/Summer_Camp24/Day5/16.jpg","./assets/images/Summer_Camp24/Day5/17.jpg","./assets/images/Summer_Camp24/Day5/18.jpg",
                "./assets/images/Summer_Camp24/Day5/19.jpg","./assets/images/Summer_Camp24/Day5/20.jpg","./assets/images/Summer_Camp24/Day5/21.jpg",
                "./assets/images/Summer_Camp24/Day5/22.jpg","./assets/images/Summer_Camp24/Day5/23.jpg","./assets/images/Summer_Camp24/Day5/24.jpg",
                "./assets/images/Summer_Camp24/Day5/25.jpg","./assets/images/Summer_Camp24/Day5/26.jpg","./assets/images/Summer_Camp24/Day5/27.jpg",
                "./assets/images/Summer_Camp24/Day5/28.jpg","./assets/images/Summer_Camp24/Day5/29.jpg","./assets/images/Summer_Camp24/Day5/30.jpg",
                "./assets/images/Summer_Camp24/Day5/31.jpg","./assets/images/Summer_Camp24/Day5/32.jpg","./assets/images/Summer_Camp24/Day5/33.jpg",
                "./assets/images/Summer_Camp24/Day5/34.jpg","./assets/images/Summer_Camp24/Day5/35.jpg","./assets/images/Summer_Camp24/Day5/36.jpg",
                "./assets/images/Summer_Camp24/Day5/37.jpg","./assets/images/Summer_Camp24/Day5/38.jpg","./assets/images/Summer_Camp24/Day5/39.jpg",
                "./assets/images/Summer_Camp24/Day5/40.jpg","./assets/images/Summer_Camp24/Day5/41.jpg","./assets/images/Summer_Camp24/Day5/42.jpg",
                "./assets/images/Summer_Camp24/Day5/43.jpg","./assets/images/Summer_Camp24/Day5/44.jpg","./assets/images/Summer_Camp24/Day5/45.jpg",
                "./assets/images/Summer_Camp24/Day5/46.jpg","./assets/images/Summer_Camp24/Day5/47.jpg","./assets/images/Summer_Camp24/Day5/48.jpg",
                "./assets/images/Summer_Camp24/Day5/49.jpg","./assets/images/Summer_Camp24/Day5/50.jpg","./assets/images/Summer_Camp24/Day5/51.jpg",
                "./assets/images/Summer_Camp24/Day5/52.jpg","./assets/images/Summer_Camp24/Day5/53.jpg","./assets/images/Summer_Camp24/Day5/54.jpg",
                "./assets/images/Summer_Camp24/Day5/55.jpg","./assets/images/Summer_Camp24/Day5/56.jpg","./assets/images/Summer_Camp24/Day5/57.jpg",
                "./assets/images/Summer_Camp24/Day5/58.jpg","./assets/images/Summer_Camp24/Day5/59.jpg","./assets/images/Summer_Camp24/Day5/60.jpg",
                "./assets/images/Summer_Camp24/Day5/61.jpg","./assets/images/Summer_Camp24/Day5/62.jpg","./assets/images/Summer_Camp24/Day5/63.jpg",
                "./assets/images/Summer_Camp24/Day5/64.jpg","./assets/images/Summer_Camp24/Day5/65.jpg","./assets/images/Summer_Camp24/Day5/66.jpg",
                "./assets/images/Summer_Camp24/Day5/67.jpg","./assets/images/Summer_Camp24/Day5/68.jpg","./assets/images/Summer_Camp24/Day5/69.jpg",
                "./assets/images/Summer_Camp24/Day5/70.jpg","./assets/images/Summer_Camp24/Day5/71.jpg","./assets/images/Summer_Camp24/Day5/72.jpg",
                "./assets/images/Summer_Camp24/Day5/73.jpg","./assets/images/Summer_Camp24/Day5/74.jpg","./assets/images/Summer_Camp24/Day5/75.jpg",
                "./assets/images/Summer_Camp24/Day5/76.jpg","./assets/images/Summer_Camp24/Day5/77.jpg","./assets/images/Summer_Camp24/Day5/78.jpg",
                "./assets/images/Summer_Camp24/Day5/79.jpg","./assets/images/Summer_Camp24/Day5/80.jpg","./assets/images/Summer_Camp24/Day5/81.jpg",
                "./assets/images/Summer_Camp24/Day5/82.jpg",];

const renderPhotos = (value) => {
  photosEl.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl.appendChild(item);
  }
};

const renderEventPhotos1 = (value) => {
  photosEl1.innerHTML = "";
  photosEl2.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl1.appendChild(item);
  }
};

const renderEventPhotos2 = (value) => {
  photosEl1.innerHTML = "";
  photosEl2.innerHTML = "";

  for (let i = 0; i < value.length; i++) {
    const item = document.createElement("div");
    item.setAttribute("class", "gallery-item");
    const img = document.createElement("img");
    img.setAttribute("id", "myImg");
    img.setAttribute("src", value[i]);
    img.setAttribute("onclick", "imgModal(src)")
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");
    item.appendChild(img);
    photosEl2.appendChild(item);
  }
};

//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add modal to the parent element 
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
      }; 
    modal.append(newImage, closeBtn);
};
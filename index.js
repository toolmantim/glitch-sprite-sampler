(function() {

  var sprites = document.querySelector('.sprites');

  new Sprite({
    image: 'sheets/piglet__x1_sit_png_1354830978.png',
    frames: 700,
    cols: 24,
    width: 41,
    height: 44
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/mike_tyson_grill__x1_tool_animation_png_1354830323.png',
    frames: 75,
    cols: 8,
    width: 115,
    height: 73
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_bureaucrat_arms_02_glasses_none_hair_03_legs_02_necklace_none_tie_02_torso_02_x1_idle2_png_1354833039.png',
    frames: 79,
    cols: 10,
    width: 97,
    height: 90
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_dumbbot_variant_widgetPink_x1_attract_png_1354836800.png',
    frames: 57,
    cols: 12,
    width: 81,
    height: 88
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_cubimal_piggy__x1_race_png_1354836293.png',
    frames: 60,
    cols: 20,
    width: 37,
    height: 28
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_cubimal_chick__x1_race_png_1354836255.png',
    frames: 60,
    cols: 20,
    width: 36,
    height: 32
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_cubimal_hellbartender__x1_race_png_1354839855.png',
    frames: 60,
    cols: 20,
    width: 39,
    height: 48
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_forehorseman__x1_idle_png_1355170558.png',
    frames: 95,
    cols: 5,
    width: 191,
    height: 202
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_rube__x1_offer_accept_png_1354831080.png',
    frames: 70,
    cols: 9,
    width: 108,
    height: 154
  }).appendTo(sprites).init();

  new Sprite({
    image: 'sheets/npc_fox_fox_orangeFox_x1_jump_png_1354839594.png',
    frames: 28,
    cols: 6,
    width: 153,
    height: 139
  }).appendTo(sprites).init();

})();
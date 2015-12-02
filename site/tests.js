

test = true;

QUnit.test( "TC1_Geld_groeßer_0", function( ) {
  equal(checkGeld(),true)
});

QUnit.test( "TC1_Gesundheit_groeßer_0", function( ) {
  equal(checkGesundheit(),true)
});

QUnit.test( "TC1_Gesundheit_ist_0", function( ) {
  gesundheit = 0;
  qualitaet = 10
  equal(checkGesundheit(),false)
  entwickeln();
  equal(qualitaet,10)
});

QUnit.test( "TC1_Zeit_nicht_0", function( ) {
  zeit = 1;
  zeitMax = 2;
  equal(checkZeit(),true)
});

QUnit.test( "TC1_Zeit_ist_0", function( ) {
  zeit = 2;
  zeitMax = 2;
  equal(checkZeit(),false)
});

QUnit.test( "TC1_Motivation_ist_0", function( ) {
  motivation = 0;
  qualitaet = 10;
  entwickeln();
  equal(qualitaet,10)
});

QUnit.test( "TC1_Qualitaet_ist_10", function( ) {
  qualitaet = 10;
  equal(checkQualitaet(),false)
});

QUnit.test( "TC1_Qualitaet_kleiner_10", function( ) {
  qualitaet = 9;
  equal(checkQualitaet(),true)
});

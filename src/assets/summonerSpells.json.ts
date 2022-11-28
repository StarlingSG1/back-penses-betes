// 20221122211449
// http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/summoner.json

export default [{
    "type": "summoner",
    "version": "12.22.1",
    "data": {
      "SummonerBarrier": {
        "id": "SummonerBarrier",
        "name": "Barrier",
        "description": "Shields your champion from 105-411 damage (depending on champion level) for 2 seconds.",
        "tooltip": "Temporarily shields {{ tooltipabsorbeddamage }} damage from your champion for 2 seconds.",
        "maxrank": 1,
        "cooldown": [
          180
        ],
        "cooldownBurn": "180",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            87
          ],
          [
            18
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "87",
          "18",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "21",
        "summonerLevel": 4,
        "modes": [
          "NEXUSBLITZ",
          "URF",
          "PRACTICETOOL",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "ONEFORALL",
          "ARSR",
          "ASSASSINATE",
          "FIRSTBLOOD",
          "PROJECT",
          "STARGUARDIAN"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          1200
        ],
        "rangeBurn": "1200",
        "image": {
          "full": "SummonerBarrier.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 0,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerBoost": {
        "id": "SummonerBoost",
        "name": "Cleanse",
        "description": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.",
        "tooltip": "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and reduces the duration of disables by 65% for the next {{ e2 }} seconds.",
        "maxrank": 1,
        "cooldown": [
          210
        ],
        "cooldownBurn": "210",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0.65
          ],
          [
            3
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0.65",
          "3",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "1",
        "summonerLevel": 9,
        "modes": [
          "URF",
          "NEXUSBLITZ",
          "ARSR",
          "ONEFORALL",
          "ARAM",
          "CLASSIC",
          "PRACTICETOOL",
          "DOOMBOTSTEEMO",
          "TUTORIAL",
          "ULTBOOK",
          "FIRSTBLOOD",
          "PROJECT"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          200
        ],
        "rangeBurn": "200",
        "image": {
          "full": "SummonerBoost.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 48,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerDot": {
        "id": "SummonerDot",
        "name": "Ignite",
        "description": "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",
        "tooltip": "Ignite deals <span class=\"colorFEFCFF\">{{ tooltiptruedamagecalculation }}</span> true damage to target enemy champion over 5 seconds, grants you vision of the target and applies {{ grievousamount*100 }}% Grievous Wounds for the duration.<br /><br /><rules>(Grievous Wounds reduces healing and regeneration by a percentage equal to the highest value applied. This vision does not reveal stealthed enemies.)</rules>",
        "maxrank": 1,
        "cooldown": [
          180
        ],
        "cooldownBurn": "180",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            5
          ],
          [
            10
          ],
          [
            4
          ],
          [
            100
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "5",
          "10",
          "4",
          "100",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "14",
        "summonerLevel": 9,
        "modes": [
          "NEXUSBLITZ",
          "URF",
          "PRACTICETOOL",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "ONEFORALL",
          "ARSR",
          "ASSASSINATE",
          "FIRSTBLOOD"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          600
        ],
        "rangeBurn": "600",
        "image": {
          "full": "SummonerDot.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 96,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerExhaust": {
        "id": "SummonerExhaust",
        "name": "Exhaust",
        "description": "Exhausts target enemy champion, reducing their Move Speed by 30%, and their damage dealt by 35% for 3 seconds.",
        "tooltip": "Exhausts target enemy champion, reducing their Move Speed by {{ e5 }}%, and their damage dealt by {{ damagereductiontooltip }}% for 3 seconds.",
        "maxrank": 1,
        "cooldown": [
          210
        ],
        "cooldownBurn": "210",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            3
          ],
          [
            35
          ],
          [
            0
          ],
          [
            0
          ],
          [
            30
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "3",
          "35",
          "0",
          "0",
          "30",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "3",
        "summonerLevel": 4,
        "modes": [
          "NEXUSBLITZ",
          "URF",
          "PRACTICETOOL",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "ONEFORALL",
          "ARSR"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          650
        ],
        "rangeBurn": "650",
        "image": {
          "full": "SummonerExhaust.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 144,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerFlash": {
        "id": "SummonerFlash",
        "name": "Flash",
        "description": "Teleports your champion a short distance toward your cursor's location.",
        "tooltip": "Teleports your champion a short distance toward your cursor's location.",
        "maxrank": 1,
        "cooldown": [
          300
        ],
        "cooldownBurn": "300",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            400
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "400",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "4",
        "summonerLevel": 7,
        "modes": [
          "NEXUSBLITZ",
          "URF",
          "PRACTICETOOL",
          "SNOWURF",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "ONEFORALL",
          "ARSR",
          "ASSASSINATE",
          "FIRSTBLOOD",
          "PROJECT",
          "STARGUARDIAN"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          425
        ],
        "rangeBurn": "425",
        "image": {
          "full": "SummonerFlash.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 192,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerHaste": {
        "id": "SummonerHaste",
        "name": "Ghost",
        "description": "For 10 seconds, your champion can move through units and gains 24 - 48% Move Speed (depending on champion level). Ghost extends its duration on takedown.",
        "tooltip": "For {{ duration }} seconds, your champion can move through units and gains {{ movespeedmod }} Move Speed.<br /><br />Ghost extends its duration by {{ takedownextension }} seconds on takedown.",
        "maxrank": 1,
        "cooldown": [
          210
        ],
        "cooldownBurn": "210",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "6",
        "summonerLevel": 1,
        "modes": [
          "NEXUSBLITZ",
          "TUTORIAL_MODULE_2",
          "URF",
          "PRACTICETOOL",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "TUTORIAL_MODULE_1",
          "ONEFORALL",
          "ARSR",
          "ASSASSINATE",
          "FIRSTBLOOD",
          "PROJECT",
          "STARGUARDIAN"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          200
        ],
        "rangeBurn": "200",
        "image": {
          "full": "SummonerHaste.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 240,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerHeal": {
        "id": "SummonerHeal",
        "name": "Heal",
        "description": "Restores 80-318 Health (depending on champion level) and grants 30% Move Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
        "tooltip": "Restores {{ tooltiphealamount }} Health and grants 30% Move Speed for 1 second to your champion and target allied champion. This healing is halved for units recently affected by Summoner Heal.<br /><br /><span class=\"colorFFFF00\">If this spell cannot find a target, it will cast on the most wounded allied champion in range.</span>",
        "maxrank": 1,
        "cooldown": [
          240
        ],
        "cooldownBurn": "240",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0.3
          ],
          [
            66
          ],
          [
            14
          ],
          [
            0.5
          ],
          [
            826
          ],
          [
            0.5
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0.3",
          "66",
          "14",
          "0.5",
          "826",
          "0.5",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "7",
        "summonerLevel": 1,
        "modes": [
          "NEXUSBLITZ",
          "TUTORIAL_MODULE_2",
          "URF",
          "PRACTICETOOL",
          "TUTORIAL",
          "CLASSIC",
          "ARAM",
          "DOOMBOTSTEEMO",
          "ULTBOOK",
          "TUTORIAL_MODULE_1",
          "ONEFORALL",
          "ARSR",
          "ASSASSINATE",
          "PROJECT",
          "STARGUARDIAN"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          850
        ],
        "rangeBurn": "850",
        "image": {
          "full": "SummonerHeal.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 288,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerMana": {
        "id": "SummonerMana",
        "name": "Clarity",
        "description": "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",
        "tooltip": "Restores {{ e1 }}% maximum Mana to your Champion and {{ e2 }}% to nearby allies.",
        "maxrank": 1,
        "cooldown": [
          240
        ],
        "cooldownBurn": "240",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            50
          ],
          [
            25
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "50",
          "25",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "13",
        "summonerLevel": 6,
        "modes": [
          "ARAM",
          "FIRSTBLOOD"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          600
        ],
        "rangeBurn": "600",
        "image": {
          "full": "SummonerMana.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 336,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerPoroRecall": {
        "id": "SummonerPoroRecall",
        "name": "To the King!",
        "description": "Quickly travel to the Poro King's side.",
        "tooltip": "<span class=\"colorFFE076\">Passive:</span> Hitting an enemy champion with a Poro gives your team a Poro Mark. Upon reaching 10 Poro Marks, your team summons the Poro King to fight alongside them. While the Poro King is active, no Poro Marks can be scored by either team.<br /><br /><span class=\"colorFFE076\">Active:</span> Quickly dash to King Poro's side. Can only be cast while the Poro King is summoned for your team. <br /><br /><i><span class=\"colorFDD017\">''Poros tug the heartstrings. The rest of you just comes along for the ride.''</span></i></mainText>",
        "maxrank": 1,
        "cooldown": [
          10
        ],
        "cooldownBurn": "10",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            3000
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "3000",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "30",
        "summonerLevel": 1,
        "modes": [
          "KINGPORO"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          200
        ],
        "rangeBurn": "200",
        "image": {
          "full": "SummonerPoroRecall.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 384,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerPoroThrow": {
        "id": "SummonerPoroThrow",
        "name": "Poro Toss",
        "description": "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",
        "tooltip": "Toss a Poro a long distance, dealing {{ f2 }} true damage to the first enemy unit hit, granting <span class=\"coloree91d7\">True Sight</span> of the target.<br /><br />This ability can be recast for 3 seconds if it hits an enemy to dash to the target hit, dealing {{ f2 }} more true damage and reducing the cooldown of the next Poro Toss by {{ e4 }} seconds.<br /><br />Poros are not blocked by spell shields or wind walls because they are animals, not spells!<br /><br /><i><span class=\"colorFDD017\">''Poros are a model for Runeterran aerodynamics.''</span></i></mainText>",
        "maxrank": 1,
        "cooldown": [
          20
        ],
        "cooldownBurn": "20",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            20
          ],
          [
            10
          ],
          [
            3
          ],
          [
            5
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "20",
          "10",
          "3",
          "5",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "31",
        "summonerLevel": 1,
        "modes": [
          "KINGPORO"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          2500
        ],
        "rangeBurn": "2500",
        "image": {
          "full": "SummonerPoroThrow.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 432,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerSmite": {
        "id": "SummonerSmite",
        "name": "Smite",
        "description": "Deals 450 true damage to target epic, large, or medium monster or minion. Against monsters, additionally restores 90 (+10% maximum Health) Health. Holds two charges (90s Recharge Time)",
        "tooltip": "Deals <span class=\"colorFEFCFF\">{{ smitebasedamage }}</span> true damage to target monster or minion.<br />",
        "maxrank": 1,
        "cooldown": [
          15
        ],
        "cooldownBurn": "15",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            15
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "15",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "11",
        "summonerLevel": 9,
        "modes": [
          "URF",
          "CLASSIC",
          "ARSR",
          "ONEFORALL",
          "PRACTICETOOL",
          "NEXUSBLITZ",
          "TUTORIAL",
          "DOOMBOTSTEEMO"
        ],
        "costType": "No Cost",
        "maxammo": "2",
        "range": [
          500
        ],
        "rangeBurn": "500",
        "image": {
          "full": "SummonerSmite.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 0,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerSnowURFSnowball_Mark": {
        "id": "SummonerSnowURFSnowball_Mark",
        "name": "Mark",
        "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
        "tooltip": "Throw a snowball a long distance, dealing {{ tooltipdamagetotal }} true damage to the first enemy unit hit and granting <span class=\"coloree91d7\">True Sight</span> of the target. If it hits an enemy, this ability can be recast for {{ e3 }} seconds to Dash to the tagged unit, dealing an additional {{ tooltipdamagetotal }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ e4 }}%.<br /><br /><span class=\"colorFFFF00\">Mark projectiles are not stopped by spell shields or projectile mitigation.</span>",
        "maxrank": 1,
        "cooldown": [
          80
        ],
        "cooldownBurn": "80",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            10
          ],
          [
            5
          ],
          [
            3
          ],
          [
            25
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "10",
          "5",
          "3",
          "25",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "39",
        "summonerLevel": 6,
        "modes": [
          "SNOWURF"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          8000
        ],
        "rangeBurn": "8000",
        "image": {
          "full": "SummonerSnowURFSnowball_Mark.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 48,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerSnowball": {
        "id": "SummonerSnowball",
        "name": "Mark",
        "description": "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
        "tooltip": "Throw a snowball a long distance, dealing {{ tooltipdamagetotal }} true damage to the first enemy unit hit and granting <span class=\"coloree91d7\">True Sight</span> of the target. If it hits an enemy, this ability can be recast for {{ e3 }} seconds to Dash to the tagged unit, dealing an additional {{ tooltipdamagetotal }} true damage. Dashing to the target will reduce the cooldown of Mark by {{ e4 }}%.<br /><br /><span class=\"colorFFFF00\">Mark projectiles are not stopped by spell shields or projectile mitigation.</span>",
        "maxrank": 1,
        "cooldown": [
          80
        ],
        "cooldownBurn": "80",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            10
          ],
          [
            5
          ],
          [
            3
          ],
          [
            25
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "10",
          "5",
          "3",
          "25",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "32",
        "summonerLevel": 6,
        "modes": [
          "ARAM",
          "FIRSTBLOOD"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          1600
        ],
        "rangeBurn": "1600",
        "image": {
          "full": "SummonerSnowball.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 96,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "SummonerTeleport": {
        "id": "SummonerTeleport",
        "name": "Teleport",
        "description": "After channeling for 4 seconds, teleports your champion to target allied structure. Upgrades to Unleashed Teleport at 14 minutes, which teleports your champion to target allied structure, minion, or ward.",
        "tooltip": "After channeling for {{ channelduration }} seconds, your champion teleports to target allied structure.<br /><br />Upgrades to Unleashed Teleport when Turret Plates fall at 14 minutes. Unleashed Teleport has a {{ upgradedcooldown }}s cooldown, can be used on allied structures, minions, or wards, and grants a {{ msamount*100 }}% Move Speed boost for {{ msduration }} seconds.",
        "maxrank": 1,
        "cooldown": [
          360
        ],
        "cooldownBurn": "360",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "12",
        "summonerLevel": 7,
        "modes": [
          "ONEFORALL",
          "PRACTICETOOL",
          "CLASSIC",
          "TUTORIAL",
          "ULTBOOK",
          "ARSR",
          "ASSASSINATE",
          "DOOMBOTSTEEMO"
        ],
        "costType": "No Cost",
        "maxammo": "-1",
        "range": [
          25000
        ],
        "rangeBurn": "25000",
        "image": {
          "full": "SummonerTeleport.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 144,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "No Cost"
      },
      "Summoner_UltBookPlaceholder": {
        "id": "Summoner_UltBookPlaceholder",
        "name": "Placeholder",
        "description": "This slot will be replaced by another champion's ultimate selected at the start of the game. There will be 30 seconds to select an ultimate. Be prepared!",
        "tooltip": "Will be replaced by your Ultimate Summoner Spell selection.{{ spellmodifierdescriptionappend }}",
        "maxrank": 1,
        "cooldown": [
          0
        ],
        "cooldownBurn": "0",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "54",
        "summonerLevel": 1,
        "modes": [
          "ULTBOOK"
        ],
        "costType": "&nbsp;",
        "maxammo": "-1",
        "range": [
          400
        ],
        "rangeBurn": "400",
        "image": {
          "full": "Summoner_UltBookPlaceholder.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 192,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "&nbsp;"
      },
      "Summoner_UltBookSmitePlaceholder": {
        "id": "Summoner_UltBookSmitePlaceholder",
        "name": "Placeholder and Attack-Smite",
        "description": "This slot will be replaced by another champion's ultimate and you will gain Attack-Smite. There will be 30 seconds to select an ultimate. Be prepared!",
        "tooltip": "Will be replaced by your Ultimate Summoner Spell.<br /><br />Gain Attack-Smite. Attack-Smite will execute allied Buff Monsters, Epic Monsters, and Scuttle Crabs when you attack them.<br /><br /><attention>Attack-Smite does not have a cooldown.</attention>{{ spellmodifierdescriptionappend }}",
        "maxrank": 1,
        "cooldown": [
          0
        ],
        "cooldownBurn": "0",
        "cost": [
          0
        ],
        "costBurn": "0",
        "datavalues": {
          
        },
        "effect": [
          null,
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ],
          [
            0
          ]
        ],
        "effectBurn": [
          null,
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0",
          "0"
        ],
        "vars": [
          
        ],
        "key": "55",
        "summonerLevel": 1,
        "modes": [
          "ULTBOOK"
        ],
        "costType": "&nbsp;",
        "maxammo": "-1",
        "range": [
          400
        ],
        "rangeBurn": "400",
        "image": {
          "full": "Summoner_UltBookSmitePlaceholder.png",
          "sprite": "spell0.png",
          "group": "spell",
          "x": 240,
          "y": 48,
          "w": 48,
          "h": 48
        },
        "resource": "&nbsp;"
      }
    }
  }]
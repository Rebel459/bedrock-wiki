if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.3373e8a1.js",revision:null},{url:"assets/404.md.3373e8a1.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.52d10580.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.52d10580.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.aa54ca11.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.aa54ca11.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.2cd7606b.js",revision:null},{url:"assets/animation-controllers_death-commands.md.2cd7606b.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.4e452a1d.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.4e452a1d.lean.js",revision:null},{url:"assets/animation-controllers_index.md.47cde2d2.js",revision:null},{url:"assets/animation-controllers_index.md.47cde2d2.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.d43fecf8.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.d43fecf8.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.c1b5d757.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.c1b5d757.lean.js",revision:null},{url:"assets/app.fe77e92a.js",revision:null},{url:"assets/blocks_applying-effects.md.6ba1a3b6.js",revision:null},{url:"assets/blocks_applying-effects.md.6ba1a3b6.lean.js",revision:null},{url:"assets/blocks_block-materials.md.94cb314b.js",revision:null},{url:"assets/blocks_block-materials.md.94cb314b.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.8b01cbfc.js",revision:null},{url:"assets/blocks_block-shapes.md.8b01cbfc.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.f25c065b.js",revision:null},{url:"assets/blocks_block-sounds.md.f25c065b.lean.js",revision:null},{url:"assets/blocks_block-tags.md.21fbfe17.js",revision:null},{url:"assets/blocks_block-tags.md.21fbfe17.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.a273fe8a.js",revision:null},{url:"assets/blocks_block-texture-variation.md.a273fe8a.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.58ba2611.js",revision:null},{url:"assets/blocks_blocks-16.md.58ba2611.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.e685f6f8.js",revision:null},{url:"assets/blocks_blocks-intro.md.e685f6f8.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.62f7b7df.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.62f7b7df.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.ee8769a0.js",revision:null},{url:"assets/blocks_custom-tree.md.ee8769a0.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.e2b6b1fe.js",revision:null},{url:"assets/blocks_fake-blocks.md.e2b6b1fe.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7f554682.js",revision:null},{url:"assets/blocks_flipbook-textures.md.7f554682.lean.js",revision:null},{url:"assets/blocks_index.md.9cf799f7.js",revision:null},{url:"assets/blocks_index.md.9cf799f7.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.00c8ed08.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.00c8ed08.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a1404aa1.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.a1404aa1.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.edf9281c.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.edf9281c.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.9994b0d5.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.9994b0d5.lean.js",revision:null},{url:"assets/chunks/AlgoliaSearch.25ee059b.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.2f83a6bd.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_index.md.9ee2e39c.js",revision:null},{url:"assets/commands_index.md.9ee2e39c.lean.js",revision:null},{url:"assets/commands_mcfunction.md.d1d082e4.js",revision:null},{url:"assets/commands_mcfunction.md.d1d082e4.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.ddc03aca.js",revision:null},{url:"assets/commands_nbt-commands.md.ddc03aca.lean.js",revision:null},{url:"assets/commands_new-execute.md.0c585bd9.js",revision:null},{url:"assets/commands_new-execute.md.0c585bd9.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.8dcd7f73.js",revision:null},{url:"assets/commands_relative-coordinates.md.8dcd7f73.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.9aecf5b4.js",revision:null},{url:"assets/commands_scoreboard-operations.md.9aecf5b4.lean.js",revision:null},{url:"assets/commands_selectors.md.a43b0e8b.js",revision:null},{url:"assets/commands_selectors.md.a43b0e8b.lean.js",revision:null},{url:"assets/commands_tellraw.md.15e9ef6b.js",revision:null},{url:"assets/commands_tellraw.md.15e9ef6b.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.6d43ed5a.js",revision:null},{url:"assets/commands_tick_json-creations.md.6d43ed5a.lean.js",revision:null},{url:"assets/commands_timers.md.6e3cc266.js",revision:null},{url:"assets/commands_timers.md.6e3cc266.lean.js",revision:null},{url:"assets/concepts_contents.md.80b03211.js",revision:null},{url:"assets/concepts_contents.md.80b03211.lean.js",revision:null},{url:"assets/concepts_emojis.md.4ba7615e.js",revision:null},{url:"assets/concepts_emojis.md.4ba7615e.lean.js",revision:null},{url:"assets/concepts_index.md.772921c2.js",revision:null},{url:"assets/concepts_index.md.772921c2.lean.js",revision:null},{url:"assets/concepts_molang.md.b6f7c086.js",revision:null},{url:"assets/concepts_molang.md.b6f7c086.lean.js",revision:null},{url:"assets/concepts_namespaces.md.79379e91.js",revision:null},{url:"assets/concepts_namespaces.md.79379e91.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.a58860e8.js",revision:null},{url:"assets/concepts_overwriting-assets.md.a58860e8.lean.js",revision:null},{url:"assets/concepts_shaders.md.4787ced8.js",revision:null},{url:"assets/concepts_shaders.md.4787ced8.lean.js",revision:null},{url:"assets/concepts_sounds.md.42e9797d.js",revision:null},{url:"assets/concepts_sounds.md.42e9797d.lean.js",revision:null},{url:"assets/concepts_subpacks.md.24b1d00f.js",revision:null},{url:"assets/concepts_subpacks.md.24b1d00f.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.1101c102.js",revision:null},{url:"assets/concepts_text-and-translations.md.1101c102.lean.js",revision:null},{url:"assets/concepts_textures-list.md.d63bd45a.js",revision:null},{url:"assets/concepts_textures-list.md.d63bd45a.lean.js",revision:null},{url:"assets/contribute-how-to.md.f993b2fc.js",revision:null},{url:"assets/contribute-how-to.md.f993b2fc.lean.js",revision:null},{url:"assets/contribute-style.md.fc16bda9.js",revision:null},{url:"assets/contribute-style.md.fc16bda9.lean.js",revision:null},{url:"assets/contribute.md.2b076d78.js",revision:null},{url:"assets/contribute.md.2b076d78.lean.js",revision:null},{url:"assets/discord.md.f341ecbd.js",revision:null},{url:"assets/discord.md.f341ecbd.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.b2cd1d67.js",revision:null},{url:"assets/documentation_creative-categories.md.b2cd1d67.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.6d1882b2.js",revision:null},{url:"assets/documentation_fog-ids.md.6d1882b2.lean.js",revision:null},{url:"assets/documentation_index.md.7d3e0e8c.js",revision:null},{url:"assets/documentation_index.md.7d3e0e8c.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.f0b7c5bf.js",revision:null},{url:"assets/documentation_material-config-description.md.f0b7c5bf.lean.js",revision:null},{url:"assets/documentation_materials.md.d7ed9a07.js",revision:null},{url:"assets/documentation_materials.md.d7ed9a07.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.88d30bac.js",revision:null},{url:"assets/documentation_pack-structure.md.88d30bac.lean.js",revision:null},{url:"assets/documentation_projectiles.md.b33e64ec.js",revision:null},{url:"assets/documentation_projectiles.md.b33e64ec.lean.js",revision:null},{url:"assets/documentation_queries.md.03e4387f.js",revision:null},{url:"assets/documentation_queries.md.03e4387f.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.bcfcc446.js",revision:null},{url:"assets/documentation_shared-constructs.md.bcfcc446.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.8f38971f.js",revision:null},{url:"assets/documentation_sound-definitions.md.8f38971f.lean.js",revision:null},{url:"assets/entities_boat-entities.md.8e7ff599.js",revision:null},{url:"assets/entities_boat-entities.md.8e7ff599.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.cd302388.js",revision:null},{url:"assets/entities_detecting-other-entities.md.cd302388.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4efe6c16.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4efe6c16.lean.js",revision:null},{url:"assets/entities_dummy-components.md.fbb214f7.js",revision:null},{url:"assets/entities_dummy-components.md.fbb214f7.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.3395bc68.js",revision:null},{url:"assets/entities_dummy-entities.md.3395bc68.lean.js",revision:null},{url:"assets/entities_entity-attack.md.1d3f4b2e.js",revision:null},{url:"assets/entities_entity-attack.md.1d3f4b2e.lean.js",revision:null},{url:"assets/entities_entity-events.md.6fb87941.js",revision:null},{url:"assets/entities_entity-events.md.6fb87941.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.99da7c35.js",revision:null},{url:"assets/entities_entity-holds-item.md.99da7c35.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.18d83b4f.js",revision:null},{url:"assets/entities_entity-intro-bp.md.18d83b4f.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.66e49a5d.js",revision:null},{url:"assets/entities_entity-intro-rp.md.66e49a5d.lean.js",revision:null},{url:"assets/entities_entity-movement.md.df7fe34a.js",revision:null},{url:"assets/entities_entity-movement.md.df7fe34a.lean.js",revision:null},{url:"assets/entities_entity-properties.md.aa3889a1.js",revision:null},{url:"assets/entities_entity-properties.md.aa3889a1.lean.js",revision:null},{url:"assets/entities_flying-entities.md.6bfdb27e.js",revision:null},{url:"assets/entities_flying-entities.md.6bfdb27e.lean.js",revision:null},{url:"assets/entities_index.md.738dfa0f.js",revision:null},{url:"assets/entities_index.md.738dfa0f.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a8c228a7.js",revision:null},{url:"assets/entities_introduction-to-aec.md.a8c228a7.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.00002736.js",revision:null},{url:"assets/entities_invulnerable-entities.md.00002736.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.150b7c95.js",revision:null},{url:"assets/entities_look-at-entity.md.150b7c95.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.ee98dd5a.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.ee98dd5a.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.8c2d5ef7.js",revision:null},{url:"assets/entities_npc-dialogs.md.8c2d5ef7.lean.js",revision:null},{url:"assets/entities_render-controllers.md.29377cf4.js",revision:null},{url:"assets/entities_render-controllers.md.29377cf4.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.16a0c702.js",revision:null},{url:"assets/entities_runtime-identifier.md.16a0c702.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.81801ac9.js",revision:null},{url:"assets/entities_sleeping-entities.md.81801ac9.lean.js",revision:null},{url:"assets/entities_solid-entities.md.37f9eafe.js",revision:null},{url:"assets/entities_solid-entities.md.37f9eafe.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.f25357d5.js",revision:null},{url:"assets/entities_spawn-rules.md.f25357d5.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.4bb34d52.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.4bb34d52.lean.js",revision:null},{url:"assets/entities_timers.md.749166d0.js",revision:null},{url:"assets/entities_timers.md.749166d0.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.e70ade1e.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.e70ade1e.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.3f6cba5f.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.3f6cba5f.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.90bf2310.js",revision:null},{url:"assets/entities_village-mechanic.md.90bf2310.lean.js",revision:null},{url:"assets/entities_vuc-full.md.72bb223b.lean.js",revision:null},{url:"assets/entities_vusr-full.md.287620d9.js",revision:null},{url:"assets/entities_vusr-full.md.287620d9.lean.js",revision:null},{url:"assets/graph-test.md.fb7a20fc.js",revision:null},{url:"assets/graph-test.md.fb7a20fc.lean.js",revision:null},{url:"assets/guide_addons.md.ce9cdd75.js",revision:null},{url:"assets/guide_addons.md.ce9cdd75.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.6a5ce693.js",revision:null},{url:"assets/guide_advancedmanifest.md.6a5ce693.lean.js",revision:null},{url:"assets/guide_blockbench.md.f5830717.js",revision:null},{url:"assets/guide_blockbench.md.f5830717.lean.js",revision:null},{url:"assets/guide_custom-entity.md.c54ba50b.js",revision:null},{url:"assets/guide_custom-entity.md.c54ba50b.lean.js",revision:null},{url:"assets/guide_custom-item.md.93d00206.js",revision:null},{url:"assets/guide_custom-item.md.93d00206.lean.js",revision:null},{url:"assets/guide_download-packs.md.98ec32a4.js",revision:null},{url:"assets/guide_download-packs.md.98ec32a4.lean.js",revision:null},{url:"assets/guide_format-version.md.537b8d4b.js",revision:null},{url:"assets/guide_format-version.md.537b8d4b.lean.js",revision:null},{url:"assets/guide_index.md.8e06162b.js",revision:null},{url:"assets/guide_index.md.8e06162b.lean.js",revision:null},{url:"assets/guide_introduction.md.93f12af8.js",revision:null},{url:"assets/guide_introduction.md.93f12af8.lean.js",revision:null},{url:"assets/guide_loot-table.md.45d92f16.js",revision:null},{url:"assets/guide_loot-table.md.45d92f16.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.7f59ab17.js",revision:null},{url:"assets/guide_project-setup-android.md.7f59ab17.lean.js",revision:null},{url:"assets/guide_project-setup.md.e411736a.js",revision:null},{url:"assets/guide_project-setup.md.e411736a.lean.js",revision:null},{url:"assets/guide_software-preparation.md.8e6f0cda.js",revision:null},{url:"assets/guide_software-preparation.md.8e6f0cda.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.154d0f5b.js",revision:null},{url:"assets/guide_troubleshooting.md.154d0f5b.lean.js",revision:null},{url:"assets/guide_understanding-json.md.627de670.js",revision:null},{url:"assets/guide_understanding-json.md.627de670.lean.js",revision:null},{url:"assets/hacktoberfest.md.6365770a.js",revision:null},{url:"assets/hacktoberfest.md.6365770a.lean.js",revision:null},{url:"assets/index.md.48d0c292.js",revision:null},{url:"assets/index.md.48d0c292.lean.js",revision:null},{url:"assets/items_attachables.md.1bd08a84.js",revision:null},{url:"assets/items_attachables.md.1bd08a84.lean.js",revision:null},{url:"assets/items_custom-armor.md.79625073.js",revision:null},{url:"assets/items_custom-armor.md.79625073.lean.js",revision:null},{url:"assets/items_custom-weapon.md.6ca97ff0.js",revision:null},{url:"assets/items_custom-weapon.md.6ca97ff0.lean.js",revision:null},{url:"assets/items_enchantments.md.d00950b2.js",revision:null},{url:"assets/items_enchantments.md.d00950b2.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.f95253f9.js",revision:null},{url:"assets/items_equipped-item-commands.md.f95253f9.lean.js",revision:null},{url:"assets/items_index.md.32e092e4.js",revision:null},{url:"assets/items_index.md.32e092e4.lean.js",revision:null},{url:"assets/items_item-identifiers.md.c89cdcb1.js",revision:null},{url:"assets/items_item-identifiers.md.c89cdcb1.lean.js",revision:null},{url:"assets/items_items-16.md.93bc972c.js",revision:null},{url:"assets/items_items-16.md.93bc972c.lean.js",revision:null},{url:"assets/items_items-intro.md.b2d66768.js",revision:null},{url:"assets/items_items-intro.md.b2d66768.lean.js",revision:null},{url:"assets/items_spawning-items.md.f4e65de5.js",revision:null},{url:"assets/items_spawning-items.md.f4e65de5.lean.js",revision:null},{url:"assets/items_throwable.md.12daf355.js",revision:null},{url:"assets/items_throwable.md.12daf355.lean.js",revision:null},{url:"assets/items_tool-durability.md.c885b4c0.js",revision:null},{url:"assets/items_tool-durability.md.c885b4c0.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.f568f88c.js",revision:null},{url:"assets/items_troubleshooting-items.md.f568f88c.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.5e0f104b.js",revision:null},{url:"assets/items_vanilla-usage-items.md.5e0f104b.lean.js",revision:null},{url:"assets/items_vui-full.md.704bd53b.js",revision:null},{url:"assets/items_vui-full.md.704bd53b.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.308c8028.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.308c8028.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a7ebbc21.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.a7ebbc21.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.5e8af1a0.js",revision:null},{url:"assets/json-ui_best-practices.md.5e8af1a0.lean.js",revision:null},{url:"assets/json-ui_index.md.68ff2e50.js",revision:null},{url:"assets/json-ui_index.md.68ff2e50.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e7352e3c.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e7352e3c.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d3319e84.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.d3319e84.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.ae4cc27b.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.ae4cc27b.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.6ee9a9da.js",revision:null},{url:"assets/json-ui_string-to-number.md.6ee9a9da.lean.js",revision:null},{url:"assets/loot_index.md.5accf123.js",revision:null},{url:"assets/loot_index.md.5accf123.lean.js",revision:null},{url:"assets/loot_item-functions.md.1d5e0fa7.js",revision:null},{url:"assets/loot_item-functions.md.1d5e0fa7.lean.js",revision:null},{url:"assets/loot_loot-tables.md.c2ad3cec.js",revision:null},{url:"assets/loot_loot-tables.md.c2ad3cec.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.fb7b7b29.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.fb7b7b29.lean.js",revision:null},{url:"assets/loot_recipes.md.e3a2139e.js",revision:null},{url:"assets/loot_recipes.md.e3a2139e.lean.js",revision:null},{url:"assets/loot_trade-tables.md.0187a951.js",revision:null},{url:"assets/loot_trade-tables.md.0187a951.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.9d1157d4.js",revision:null},{url:"assets/loot_trading-behavior.md.9d1157d4.lean.js",revision:null},{url:"assets/meta_addon-performance.md.db2386f3.js",revision:null},{url:"assets/meta_addon-performance.md.db2386f3.lean.js",revision:null},{url:"assets/meta_index.md.76cc3c2e.js",revision:null},{url:"assets/meta_index.md.76cc3c2e.lean.js",revision:null},{url:"assets/meta_jq.md.875d0dcb.js",revision:null},{url:"assets/meta_jq.md.875d0dcb.lean.js",revision:null},{url:"assets/meta_style-guide.md.a41a763a.js",revision:null},{url:"assets/meta_style-guide.md.a41a763a.lean.js",revision:null},{url:"assets/meta_useful-links.md.4a4d8d90.js",revision:null},{url:"assets/meta_useful-links.md.4a4d8d90.lean.js",revision:null},{url:"assets/meta_using-schemas.md.02377a2b.js",revision:null},{url:"assets/meta_using-schemas.md.02377a2b.lean.js",revision:null},{url:"assets/meta_version-control.md.7c96fd50.js",revision:null},{url:"assets/meta_version-control.md.7c96fd50.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.30bf8348.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.30bf8348.lean.js",revision:null},{url:"assets/nbt_index.md.a0f277af.js",revision:null},{url:"assets/nbt_index.md.a0f277af.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.6363390c.js",revision:null},{url:"assets/nbt_mcstructure.md.6363390c.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.224a49eb.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.224a49eb.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.cac9c4c0.js",revision:null},{url:"assets/nbt_step-by-step-example.md.cac9c4c0.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.86dd65b6.js",revision:null},{url:"assets/nbt_structure-limits.md.86dd65b6.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.a5a0d0a7.js",revision:null},{url:"assets/particles_disabling-particles.md.a5a0d0a7.lean.js",revision:null},{url:"assets/particles_index.md.8d5b56e7.js",revision:null},{url:"assets/particles_index.md.8d5b56e7.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a8422eab.js",revision:null},{url:"assets/particles_particles-and-sounds.md.a8422eab.lean.js",revision:null},{url:"assets/particles_particles.md.c34ed243.js",revision:null},{url:"assets/particles_particles.md.c34ed243.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.8c8b5e0a.js",revision:null},{url:"assets/particles_vanilla-particles.md.8c8b5e0a.lean.js",revision:null},{url:"assets/privacy.md.ce74410d.js",revision:null},{url:"assets/privacy.md.ce74410d.lean.js",revision:null},{url:"assets/scripting_custom-command.md.980d4b14.js",revision:null},{url:"assets/scripting_custom-command.md.980d4b14.lean.js",revision:null},{url:"assets/scripting_game-tests.md.447be960.js",revision:null},{url:"assets/scripting_game-tests.md.447be960.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.3923148f.js",revision:null},{url:"assets/scripting_gametest-form.md.3923148f.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.bd885e7f.js",revision:null},{url:"assets/scripting_gametest-qna.md.bd885e7f.lean.js",revision:null},{url:"assets/scripting_index.md.1d606da8.js",revision:null},{url:"assets/scripting_index.md.1d606da8.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.dce95f81.js",revision:null},{url:"assets/scripting_saving-loading.md.dce95f81.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee7a051b.js",revision:null},{url:"assets/scripting_scripting-intro.md.ee7a051b.lean.js",revision:null},{url:"assets/scripting_typescript.md.9b9097b7.js",revision:null},{url:"assets/scripting_typescript.md.9b9097b7.lean.js",revision:null},{url:"assets/servers_index.md.09496538.js",revision:null},{url:"assets/servers_index.md.09496538.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.38240151.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.38240151.lean.js",revision:null},{url:"assets/servers_server-software.md.89471930.js",revision:null},{url:"assets/servers_server-software.md.89471930.lean.js",revision:null},{url:"assets/style.1e62f284.css",revision:null},{url:"assets/test.md.348f1152.js",revision:null},{url:"assets/test.md.348f1152.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7ca51502.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7ca51502.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.c930757e.js",revision:null},{url:"assets/visuals_animation-effects.md.c930757e.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.28794a28.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.28794a28.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.0a581f03.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.0a581f03.lean.js",revision:null},{url:"assets/visuals_death-animations.md.6c41dbd8.js",revision:null},{url:"assets/visuals_death-animations.md.6c41dbd8.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.398f9e9a.js",revision:null},{url:"assets/visuals_glowing-texture.md.398f9e9a.lean.js",revision:null},{url:"assets/visuals_index.md.fbd10c68.js",revision:null},{url:"assets/visuals_index.md.fbd10c68.lean.js",revision:null},{url:"assets/visuals_introduction.md.f913b475.js",revision:null},{url:"assets/visuals_introduction.md.f913b475.lean.js",revision:null},{url:"assets/visuals_leash-position.md.71089c41.js",revision:null},{url:"assets/visuals_leash-position.md.71089c41.lean.js",revision:null},{url:"assets/visuals_materials.md.ad58793d.js",revision:null},{url:"assets/visuals_materials.md.ad58793d.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.05228eee.js",revision:null},{url:"assets/visuals_math-based-animations.md.05228eee.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.ff69dfe6.js",revision:null},{url:"assets/visuals_player-geometry.md.ff69dfe6.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.3bf26bba.js",revision:null},{url:"assets/visuals_remove-shadows.md.3bf26bba.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.23081200.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.23081200.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.f64c2268.js",revision:null},{url:"assets/visuals_structure-presentation.md.f64c2268.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.eda1bebe.js",revision:null},{url:"assets/vr_editing-your-first-model.md.eda1bebe.lean.js",revision:null},{url:"assets/vr_index.md.9c55443a.js",revision:null},{url:"assets/vr_index.md.9c55443a.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.6d8024db.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.6d8024db.lean.js",revision:null},{url:"assets/vr_pack_setup.md.c18f2b91.js",revision:null},{url:"assets/vr_pack_setup.md.c18f2b91.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.4d4bc541.js",revision:null},{url:"assets/world-generation_biome-tags.md.4d4bc541.lean.js",revision:null},{url:"assets/world-generation_biomes.md.470b34ca.js",revision:null},{url:"assets/world-generation_biomes.md.470b34ca.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.044cf3cd.js",revision:null},{url:"assets/world-generation_custom-ores.md.044cf3cd.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.4b448409.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.4b448409.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.44037502.js",revision:null},{url:"assets/world-generation_feature-types.md.44037502.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.58062a93.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.58062a93.lean.js",revision:null},{url:"assets/world-generation_index.md.0f95e56b.js",revision:null},{url:"assets/world-generation_index.md.0f95e56b.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.e7e3096f.js",revision:null},{url:"assets/world-generation_structure-features.md.e7e3096f.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.ea6f32f2.js",revision:null},{url:"assets/world-generation_surface-builder.md.ea6f32f2.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c3a585dc.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.c3a585dc.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));

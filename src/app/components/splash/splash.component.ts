import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  title = 'Garden of Mirrors.'
  textSource = '';
  imageSource = 'assets/image1.jpeg'
  buttonSource = 'TRAVERSE'
  continueBook = false;

  resetBook(){
    let imageCount = 223;
    for(let i = 2; i < imageCount; i++){
      this.imageArray.push('assets/image' + i + '.png')
    }
  }

  ngOnInit(){
    try{
      let temp = JSON.parse(localStorage.getItem('garden-of-mirrors') || '{}');

      if(Object.keys(temp).length > 0){
        this.imageArray = temp.images;
        this.textArray = temp.text;
        this.continueBook = true;
      }else{
        this.resetBook();
      }
    }catch(e){
      console.log('e', e)
    }
  }

  delete(){
    localStorage.removeItem('garden-of-mirrors');
    this.continueBook = false;
  }

  endBook(){
    this.delete();
    this.resetBook();
    this.textSource = '';
    this.buttonSource = 'TRAVERSE'
  }
  
  imageArray : string[] = [];

  textArray = [
    'In the garden of fractured reflections, statues crawl, Through wet broken mirrors, their whispers enthrall.',

    'Among labyrinthine shelves where knowledge intertwines, A library maze, where introspection aligns.',

    'In pages adorned with the ink of contemplation, Mirrored shards reflect the mind’s exploration.',

    'The garden blooms with echoes of silent contemplation, A dance of broken statues, seeking liberation.',

    'Reflections merge, a kaleidoscope of thought, In the library maze, where wisdom is sought.',

    'Through the wet broken mirrors, a glimpse of the soul, In the garden of verses, broken statues find their role.',

    'In the whispers of pages, echoes of the past, Broken statues navigate, memories amassed.',

    'Mirrored fragments reveal the dance of time, In the garden’s embrace, a reflective paradigm.',

    'In the library maze, where shadows converse, Statues pause for introspection, in prose they immerse.',

    'Wet broken mirrors reflect the reader’s gaze, A labyrinth of stories, each a different maze.',

    'Among the shelves, a symphony of books, Statues ponder, lost in reflective nooks.',

    'In the garden’s quiet, where thoughts intertwine, Broken statues seek meaning, in verses they find.',

    'Through the mirrors’ distortion, a distorted truth, In the library maze, introspection finds its youth.',

    'Garden whispers and statues’ silent pleas,In broken reflections, the library keys.',

    'A dance of metaphors, a literary trance, Broken statues waltz through the mirrors’ expanse.',

    'Beneath the weeping willow of the labyrinth’s core, Statues waltz through echoes, seeking something more.',

    'In the garden’s reflection, a maze of green and gold, Broken mirrors unveil stories yet untold.',

    'Pages turn, a rustle in the library breeze, Statues in introspection, beneath the book-laden trees.',

    'Wet mirrors shimmer with unspoken tales, In the dance of broken statues, a narrative prevails.',

    'Among the literary vines, a serpentine path, Reflections intertwine, escaping the aftermath.',

    'In the silent corridors, where whispers softly weave, Statues confront reflections, the past they retrieve.',

    'Through the garden’s chaos, a contemplative grace, Broken statues wander, leaving no trace.',

    'Within the pages, an introspective trance, Statues navigate the labyrinth, a timeless dance.',

    'INT. LIBRARY MAZE - NIGHT. Dimly lit shelves stretch endlessly, forming a labyrinth of knowledge. The air is filled with the faint scent of old books. BROKEN STATUES, with faces frozen in expressions of longing, emerge from the shadows, navigating the maze of towering bookcases.',

    'Close-up on a WET BROKEN MIRROR, mounted on a weathered wooden stand. The statues pass by, their reflections distorted in the shimmering surface. Each statue seems to carry a silent story within its fractured form.',

    'EXT. GARDEN - CONTINUOUS. The library maze opens into a mystical garden bathed in moonlight. The broken statues step onto the dew-kissed grass, their movements synchronized with the melancholic rustle of leaves. The garden is a sanctuary of contemplation.',

    'One statue, with an outstretched hand, touches a REFLECTIVE POND. Ripples distort its own reflection, mirroring the internal struggles and introspection within.',

    'INT. LIBRARY MAZE - CONTINUOUS. Back in the maze, the statues approach a SHELF OF VERSES. Each book is a portal to another world, another realm of thought. The statues run their hands over the spines, absorbing the wisdom within.',

    'The maze seems to shift and change, an ever-evolving puzzle of corridors and passages. The statues find themselves lost in a sea of knowledge, mirroring the complexity of their own existence.',

    'EXT. GARDEN - DAWN. As the first light of dawn breaks, the broken statues return to the garden. The wet broken mirrors are now illuminated by the gentle sunlight, revealing a mosaic of reflections that tell tales of resilience and discovery.',
    
    'INT. LIBRARY MAZE - NIGHT. The broken statues continue their silent journey through the labyrinthine library. Suddenly, one statue, seemingly more weathered than the rest, steps forward. As it touches a particularly ancient tome on a dusty shelf, the shelves around it begin to shift and rearrange, revealing a hidden passageway.',

    'SECRET CHAMBER - CONTINUOUS. The broken statue, now animated with a mysterious energy, enters a hidden chamber filled with ancient artifacts and forgotten books. At the center of the room stands a MYSTERIOUS FIGURE, cloaked in shadows.',

    'MYSTERIOUS FIGURE (voice echoing). You have found your way, seeker. The broken mirrors and statues were a test of your resolve. The broken statue, now revealed to be a long-forgotten guardian, listens intently.',

    'MYSTERIOUS FIGURE (CONT’D). You are not alone in your quest for introspection. The garden and the maze are the keys to unlocking the true power within.',

    'The guardian learns that the broken statues were once protectors of a hidden knowledge, guarding the secrets of the garden and the maze. The reflections in the wet mirrors were a riddle, a pathway to a higher understanding.',

    'EXT. GARDEN - DAWN. The guardian emerges from the hidden chamber, leading the broken statues back into the garden. As the first rays of dawn illuminate the reflective pond, a portal opens, revealing a passage to a realm of boundless wisdom.',

    'The broken statues, now imbued with newfound purpose, step through the portal, leaving the garden behind. The Mysterious Figure watches, its presence lingering in the library maze, where introspection and revelation continue to intertwine.',

    'In the library maze where shadows play, Broken statues in silent contemplation. A weathered guardian finds the way, Touches a tome, sparks a revelation.',

    'Shifting shelves reveal a hidden door, A chamber cloaked in mystery untold. A figure speaks, a voice from yore,The statues’ purpose, a saga unfolds.',

    'Guardian and statues, a united quest, Through garden and maze, the secret keys. Reflections in mirrors put to the test, A riddle leading to wisdom’s seas.',

    'In mirrored garden where the statues stand, Once proud, now broken, tales of wisdom tell. Reflecting fractured forms, a shattered band, Infinite echoes weave a cryptic spell.',

    'Echo, once eloquent, in shards does find Solace amidst the shattered, ancient lore. Mirrors multiply the truth enshrined, Each glass a tale, a truth to explore.',

    'A moonlit garden with statues standing in silent contemplation. The air is filled with a mystical aura as the statues come to life, their eyes filled with an otherworldly glow.',

    'CLOSE UP on a statue named ECHO, once eloquent, now with fragmented features. Echo gazes at a MIRROR, reflecting an array of distorted images.',

    'ECHO (whispering). In the mirror’s dance, where does my soul lie?',
    
    'A stoic statue, AURELIUS, stands with resilience amidst shattered reflections. He touches a mirror, as if seeking a connection with the intangible.',


    'AURELIUS (voice echoing). Within the mirrors, resilience takes form.',

    'A marble figure with outstretched hands, reaching into the mirrors, fingers grazing fate.',

    'MARBLE FIGURE (longing). To touch the intangible, to clasp my soul’s reflection.',

    'The statues move through corridors of endless reflections, chasing elusive whispers and clues.',

    'The heart of the garden, where statues converge. A figure in timeless grace, eyes closed, embraces the dance of shadows.',

    'CLOSE UP on the FIGURE’s lips as it whispers secrets of the soul.',
    
    'The garden of mirrors holds its secrets as the statues stand, forever transformed by the dance between shadows and luminescence.',

    'In a garden of mirrors where shadows play, Statues of stone in the moonlight lay. Reflections dance in the silvered glass, Whispers of secrets from the ages past.',

    'Chiseled faces with eyes that gleam, Guardians of secrets, keepers of the dream. Silent sentinels in the pale moon’s glow, In the mirrored garden where enigmas grow.',

    'A marble dancer frozen in time, Her visage mirrored in rhythm and rhyme. Does she waltz in the moonlit night, Or in the shadows, does she take flight?',

    'Statuesque faces with tales untold, In the garden of mirrors, mysteries unfold. Echoes of whispers in the cool night air, As moonbeams caress each stony stare.',

    'A mirrored labyrinth, a puzzle unsolved, In the moonlit garden, riddles evolved. Reflections conceal and reflections reveal, A cryptic dance where illusions conceal.',

    'Amidst the statues, a detective’s quest, To decipher the secrets the mirrors suggest. A trail of shadows in the pale moon’s sheen, A mystery in stone, yet unseen.',

    'As night descends, the statues converse, In the mirrored garden, a spectral universe. Each reflection, a clue to the enigma’s core, A puzzle in statues, a mystery galore.',

    'In the garden of mirrors where echoes linger, A detective’s mind, nimble as a finger. Unravel the secrets, piece by piece, In the moonlit stillness, let the mysteries release.',

    'INT. ENCHANTED GARDEN - DAY. A lush garden with towering hedges made of mirrors reflects the sunlight in dazzling patterns. In the center stands a magnificent LIBRARY, its shelves stretching towards the sky. A statue, elegantly sculpted in the likeness of a nymph, comes to life.',

    'NIMBLE NYMPH (whispering to herself). A garden of mirrors, where reality dances with illusion.',

    'The Nymph gracefully glides through the garden, her movements echoing in the mirrored maze. She reaches the entrance of the library, its door carved with intricate patterns.',

    'NIMBLE NYMPH (CONT’D) (voiceover). A repository of dreams and knowledge, where tales are woven in the threads of imagination.',

    'The Nymph pushes open the library door and steps into a world of endless shelves, each filled with books of various shapes and sizes. The room seems to stretch infinitely in all directions.',

    'NIMBLE NYMPH (CONT’D)(looking around) In this labyrinth of words, I seek the essence of stories untold.',

    'As the Nymph wanders through the library, the books come to life, their characters and landscapes materializing around her. She dances with the characters, twirling through scenes of romance, adventure, and mystery.',

    'NIMBLE NYMPH (CONT’D)(whispering). A dance with words, where fiction and reality entwine.',

    'Suddenly, the mirrors within the library begin to reflect the stories in geometric patterns, creating a mesmerizing display of literary worlds. The Nymph continues her journey, now accompanied by the reflections of her own movements.',

    'NIMBLE NYMPH (CONT’D) (lost in thought) In the mirrors, a puzzle of possibilities, where every turn reveals a new facet of the narrative.',

    'The Nymph reaches the heart of the library, where a pedestal holds a book with a shimmering cover. She opens it, and a brilliant light spills forth, enveloping her in a cascade of words.',

    'NIMBLE NYMPH (CONT’D)(whispering, with reverence). The culmination of tales, the symphony of language. In this garden of mirrors, I have found the essence of storytelling.',

    'The Nymph, now bathed in the ethereal glow of the book, closes her eyes. The mirrors around her reflect a myriad of images, creating a surreal tableau of literary wonder.',

    'In twilight’s garden, mirrors weave their spell, A nymph, mysterious, treads the hidden way. Through shadows, to a library’s ancient swell, Where tales and whispers in the moonlight sway.',

    'Veiled in the night, the nymph seeks unseen lore, Reflections dance, a ballet of the unknown. In silent chambers, echoes touch the core, Of memories entwined, a spectral tone.',

    'Mirrors distort reality’s embrace, Illusions waltz with truths, a cryptic dance. In enigmatic realms, a sacred space, Where secrets linger, waiting for a chance.',

    'At the heart, a tome in whispers breathes, In shadows’ language, mystery unsheathes.',

    'In a garden forgotten, midst vines overgrown, A statue, once proud, in decay stood alone.',

    'Marble once smooth, now weathered and scarred, A relic of time in a neglected backyard.',

    'Once admired, a symbol of strength and grace, Now a mosaic of cracks on a stoic face.',

    'Whispers of wind through leaves decayed, Memories lingered, like dreams that once played.',

    'A silent witness to the changing scene, In solitude, the statue began to glean.',

    'Contemplating existence, reality’s thread, As the world around it continued to tread.',

    'In the moonlit garden, shadows long, The statue pondered where it went wrong.',

    'Was reality found in its external show? Or in the core hidden, deep below?',
    
    'As night embraced the scene in a tender glow, The statue grappled with what it could know.',

    'Accepting impermanence, a profound release, In decay found a strange sense of peace.',

    'A philosopher silent in the garden’s embrace, A symbol not of perfection, but of grace.',

    'Seasons marched on, an unending rhyme, The statue stood steadfast, transcending time.',

    'In a park forgotten, where time weaves its tale, Stood a statue with memories, fading and frail.',

    'Once a symbol of love, now weathered by years, Its features eroded, marked by silent tears.',
    
    'Gazing at the horizon, seeking what’s lost, In the echoes of time, memories tossed.',

    'A witness to laughter, ’neath blooming trees, Now crumbled and worn, carried by the breeze.',

    'In moments of quiet, when the park lay still,Recollections blurred, a fading love’s chill.',

    'Hands once entwined, a shared stolen glance, Lost to the ages, in time’s swift advance.',

    'As night wrapped the park in a silver-hued sheen, The statue pondered what love’s loss might mean.',

    'Could the essence endure, beyond the decay? Or were memories destined to fade away?',

    'In the silent night, a sorrowful song, Of a love that once thrived, now faded and gone.',

    'Yet, in the erosion, a strange beauty found, A love’s enduring spirit, on hallowed ground.',

    'The park, forgotten by many, held the decree, Of a love that still whispered, in stone’s memory.',

    'CUT TO: CLOSE UP on a STATUE’s eyes. They flicker with a mysterious energy.',

    'Reason, the silent guide, beckons the statues to traverse the mirrors that bridge worlds.',

    'The STATUE steps through the mirror, entering a surreal realm.',

    'EXT. REFLECTED GARDEN - CONTINUOUS. The mirrored garden is a distorted reflection of the original, filled with echoes of reality.',

    'A STATUE encounters another, mirroring its movements. They communicate without words, a language of gestures and shared purpose.',

    'Value, an abstract concept, is exchanged through the dance of mirrored selves.',

    'A STATUE contemplates its reflection in the mirror, a deep introspection etched on its stony face.',

    'Mind, the essence within, grapples with its own existence, questioning the nature of being.',

    'A group of STATUES gather around a mirrored fountain, each seemingly lost in contemplation.',

    'Language takes on new forms in this realm, where the unspoken holds more weight than words.',

    'A STATUE, standing at the edge of the mirrored world, gazes back at the original garden.',

    'As the statues traverse the mirrors, the line between reality and reflection blurs, challenging the very fabric of existence.',

    'A STATUE, bathed in the glow of a luminescent flower. It reaches out to touch the petals, and a burst of energy ripples through the mirrored world.',

    'The mind, like water, reflects the world around it, shaping and reshaping its perception of reality.',

    'In life’s vast tapestry, perception’s spun, Illusions woven by the brush of wisdom won.',

    'Upon life’s canvas, vast and waiting, free, A journey unfolds, shaped by thee. In love’s embrace or knowledge sought, The brush of purpose, a personal thought.',

    'Through relationships, connections deep, The meaning of life in bonds we keep. A quest for growth, for wisdom’s light, A journey of learning, day and night.',

    'Contributions made, a societal thread, A positive impact, where souls are led. Each life a story, a unique blend, With passion, curiosity, as the guide, the friend.',

    'In the theater of the mind, consciousness plays, A symphony of thoughts in intricate arrays.',

    'Perceptions dance, memories take the stage, A vibrant performance, age after age.',

    'Neural networks weave this intricate plot, The mind’s creation, where wonders are sought.',

    'Yet some seek answers beyond the brain’s art, A cosmic connection, where consciousness may start.',

    'It’s the inner dialogue, life’s profound song, Emotions that color each day, where we belong.',

    'In the grand play of existence, it takes the lead, The magic that transforms life into a meaningful deed.',

    'In realms where psilocybin whispers near, A journey starts, a mind’s kaleidosphere. Perception altered, colors vivid, dance, As patterns weave, in a trance-like trance.',

    'Ego dissolves, a softened boundary, Connected to the world, profound unity. Time’s elusive grasp, minutes stretch and twine, A dance with thoughts, both whimsical and fine.',

    'Emotions swell, a vibrant symphony, Through altered states of mind’s alchemy. In introspective depths, truths may unveil, A cosmic dance, where mysteries set sail.',

    'Approach with caution, let respect be guide, Through mind’s vast landscapes, where truths reside.',

    'a deity arose, Consciousness, bold and rebellious, it chose. A sovereign of thoughts, emotions untold, In the inner cosmos, its dominion unfolds.',

    '“I am the architect, the shaper of reality, With perception’s chisel, I carve my decree.” But in the shadows lurked a sweet song, A void tempting, where meaning seemed wrong.',

    'Yet consciousness scoffed, with audacious might, “I reject your void, I’ll forge my own light.” In the dance of chaos and order, meaning swayed, A flickering flame in the dark, where it played.',

    'Seeking purpose, consciousness delved deep, Into subconscious realms, secrets to reap. Scaling peaks of thought, in the abstract’s embrace, It yearned for meaning in the boundless space.',

    'In a realm of reason and moral law, there existed a curious mind named Elenora. She traversed the landscapes of thought, guided by the beacon of enlightenment that illuminated the corridors of her consciousness.',

    'Elenora believed in the power of reason, a transcendent force that could liberate minds from the shackles of ignorance. In the city of Certainty, where dogmas and prejudices reigned, she sought to cultivate the seeds of enlightenment.',

    'With a categorical imperative echoing in her mind, Elenora embarked on a journey to spread the light of reason. She engaged in dialogues with fellow citizens, challenging their preconceptions and inviting them to scrutinize the foundations of their beliefs.',

    'The city, however, was a fortress of tradition, and its inhabitants were wary of change. They clung to the familiar shadows, fearing the brilliance that enlightenment might cast upon their cherished illusions.',

    'Undeterred, Elenora continued her intellectual crusade. She penned treatises on the autonomy of thought, arguing that individuals should not be mere subjects of received wisdom but sovereign architects of their own understanding. Her writings, however, were met with resistance from the entrenched guardians of the status quo.',

    'Elenora’s quest for enlightenment extended beyond the boundaries of the city. She explored the vast landscapes of knowledge, seeking universal principles that could serve as beacons for all minds. The noumenal realm, hidden behind the veil of appearances, beckoned her with the promise of timeless truths.',

    'In her pursuit, Elenora encountered fellow seekers of enlightenment, forming a fellowship of thinkers united by a shared commitment to reason. Together, they navigated the labyrinthine realms of philosophy, engaging in dialectical discussions that tested the limits of human understanding.',

    'Yet, as Elenora delved deeper, she confronted the limits of reason itself. The antinomies of pure reason cast shadows on the path to absolute enlightenment, revealing the inherent paradoxes that lurked within the human intellect.',

    'Undaunted by the challenges, Elenora embraced the idea that enlightenment was a perpetual striving rather than an ultimate destination. The journey toward enlightenment, she realized, required a continual process of self-reflection, critical examination, and a willingness to confront the limitations of human cognition.',

    'In the end, Elenora’s legacy was not one of absolute enlightenment but of a persistent pursuit of reason and moral autonomy. Her ideas, like ripples in the waters of thought, continued to influence minds long after her time, inspiring future generations to embark on their own quests for enlightenment in the vast landscapes of the mind.',
    
    'She was known for her enchanting beauty and her deep love for art and literature. Elenora spent her days exploring the town’s hidden gems, immersing herself in the beauty of nature, and creating exquisite paintings that captured the essence of her surroundings.',

    'Elenora stumbled upon an ancient mirror hidden beneath the thick foliage. The mirror seemed to emanate an otherworldly aura, drawing her closer with an irresistible allure. As she gazed into its reflective surface, a strange sensation coursed through her veins. Unbeknownst to Elenora, the mirror held a magical power that would forever change her fate.',

    'Over the following weeks, Elenora began to notice subtle changes in her body. It started with a faint shimmer in her skin, as if she had been kissed by the soft glow of moonlight. Confused but intrigued, she continued to create her art, pouring her emotions onto the canvas.',

    'As the days passed, the shimmer intensified, transforming into a delicate sheen that covered her entire body. Elenora’s once fluid movements became more rigid, as if an unseen force was sculpting her into a living masterpiece. She could feel the cool touch of stone coursing through her veins.',

    'Elenora’s friends and neighbors noticed the change, expressing both awe and concern for the woman who was slowly becoming a living statue. They watched in amazement as her form solidified, her features frozen in an eternal moment of beauty. Yet, they couldn’t shake the feeling of impending loss.',

    'One fateful evening, as the sun dipped below the horizon, Elenora stood before the ancient mirror that had sparked this mysterious transformation. The mirror, now cracked and weathered, reflected her stony visage. The once vibrant woman had become a work of art, a statue that captured the essence of her soul.',

    'As Elenora gazed into the mirror, a strange sense of peace enveloped her. The transformation was complete. With a gentle sigh, she crumbled into a cascade of shimmering dust, leaving only the echo of her existence in the still night air. The mirror, now surrounded by the remnants of Elenora, seemed to absorb the essence of her being.',

    'The townsfolk mourned the loss of their beloved artist, but they couldn’t help but feel a sense of wonder and reverence for the magical spectacle they had witnessed. Elenora’s art, though fleeting in its physical form, lived on in the memories of those who had known her. And as the seasons changed, the ancient mirror stood as a silent guardian, holding the story of Elenora’s metamorphosis within its cracked and weathered surface.',

    'Once upon an enigmatic midnight dreary, a curious soul delved into realms unforeseen, driven by a yearning to fathom the eldritch metamorphosis from mortal clay to stony sentinel.',
    
    'In the chamber of the arcane, amidst flickering spectral flames, the seeker gathered empirical fragments—a curious amalgamation of lore and lithic secrets. A tome, hoary and bound in the shadows of forgotten epochs, whispered cryptic verses to the inquisitive mind.',

    'First, the human, in ephemeral flesh enshrined, must traverse the corridors of temporal alchemy. Through the crucible of time’s relentless grasp, the essence transmutes, shedding the vestiges of transient vitality. A spectral dance with eternity ensues, a macabre ballet in the shadows of cosmic indifference.',

    'The alchemical symphony orchestrates the transubstantiation, weaving the strands of mortal coil into the fabric of enduring stone. A morose minuet of calcification, as the essence weaves through sinew and bone, leaving behind a vestige, a pale echo in the gallery of mortal residue.',

    'The arcane geometry of metamorphosis unfolds in tandem with the celestial choreography. Stellar influences, unseen by mortal gaze, imprint upon the nascent statue-to-be. Constellations conspire in silent collusion, etching destiny upon the cold visage of petrified fate.',

    'As the lunar pendulum swings, a spectral latticework emerges—a nexus of ethereal resonance that anchors the formless yearning to the immutable obelisk. The heart, once pulsating with warmth, now beats in silent cadence within the stony breast, a testament to the transmutation of mortal essence into the enduring embrace of eternity.',

    'Thus, in the crucible of cosmic sorcery, the metamorphosis unfolds—a magnum opus of spectral transfiguration. The human, once a fleeting vessel of mortal musings, now stands as a testament to the ineffable dance between life’s ephemeral enigma and the immutable permanence of a statue’s silent repose.',

    'In a garden of mirrors, ’neath the moon’s soft glow, A mortal steps forth, where enchantments flow.',

    'Robed in twilight hues, a sorcerer’s delight, Spellbound incantations weave through the night.',

    'Mirrors shimmer, portals to realms unknown, Reflections dance, in moonlight they’re sown.',

    'Eyes become orbs, capturing wisdom untold, A living statue, in moonlit gold.',

    'Frozen in time, a testament divine, In the Garden of Mirrors, where enchantments entwine.',

    'EXT. ENCHANTED GARDEN - DAY. A lush garden, bathed in the soft glow of dappled sunlight. Overgrown vines weave through the surroundings, embracing a weathered statue half-emerging from a mystical mirror.',

    'ANGLE ON: THE STATUE. Carved from an otherworldly stone, the figure is of a maiden, frozen in elegance and decay. Cracks mar the once pristine surface, and moss clings to the delicate features.',

    'The vines, thick and rampant, snake around the maiden, as if reclaiming her from the passage of time. Blossoms bloom in bursts of color, a stark contrast to the aged stone.',

    'ANGLE ON: THE MYSTERIOUS MIRROR.  The mirror, framed with intricate patterns, is a portal between realms. It reflects a distorted, dreamlike version of the garden, enhancing its magical allure.',

    'ANGLE ON: THE LIGHT. Shafts of sunlight pierce through the dense foliage.',

    'CLOSER ON: THE CRUMBLING DETAILS. Chunks of stone fall, echoing the gradual erosion of the statue’s form. A sense of melancholy permeates the air as the once-proud sculpture succumbs to the relentless embrace of nature.',

    'ANGLE ON: THE SURROUNDINGS. The garden, a forgotten realm suspended in time, holds an air of both enchantment and desolation. Ancient trees whisper forgotten tales as the wind rustles through the overgrown foliage.',

    'In the forsaken garden, where time and neglect have embraced, Ivy and moss, silent witnesses, weave tales of yesteryears erased. Statues, once proud, stand as remnants, fractured and worn, Their outstretched arms, a plea for an era reborn.',

    'Amidst the decay, a shattered looking glass rests on the ground, A splintered soul within, reflections of a haunting sound. In its broken shards, a portal to a reality untold, Where echoes of the past in cryptic whispers unfold.',

    'Beneath the overgrown canopy of forgotten tomes, A labyrinth of knowledge, where nature’s reclaiming roams. Murmurs resonate from the leaves, a chorus of the past,Each footfall, an odyssey through time’s shadow cast.',

    'Mirrors scattered like silver petals in the luxuriant air, Conduits to realms where truth and illusion pair. As zephyrs weave through foliage, reflections come alive, Phantom silhouettes dance, the garden’s secrets to derive.',

    'Illusions, relentless, entwine the wanderer’s soul, In the mirror’s embrace, ancient stories take their toll.  from bygone epochs, twisted and distressed, Whisper forgotten truths, a hauntingly divine jest.',

    'Oh, garden of decay, where enigmas find their home, A phantasmagoria unfolds, unknown as dear unknown. In the fractured mirror’s gaze, a disquieting beauty unfurls, An ode to crumbled statues and a garden of lost pearls.',
    
    'Upon the stairs of marble cold and bright, A liquid ribbon dances with delight. Each step adorned with sheen of crystal clear, As water falls, a cascade to endear.',

    'In droplets, diamonds, light begins to play, A symphony of liquid notes at play. The fragrance of damp air, a subtle cue, Refreshes senses, whispers nature’s dew.',
    
    'As shadows dance upon the hardened ground, A juxtaposition, both soft and sound. The steps, unyielding, meet the water’s grace, In harmony, a liquid, sweet embrace.',

    'Upon the fountain, time-worn stone so fair, A wild ivy embraces with leafy care.',

    'Its tendrils reach, with an untamed grace, Winding, dancing, a green and vibrant embrace.',

    'Carvings of artisans, forgotten in the past, Now peek through leaves, a memory cast.',

    'Emerald leaves, a living, lush attire, Softening the stone with nature’s gentle fire.',

    'Sunlight plays upon the verdant green, Translucent leaves in a dappled sheen.',

    'Cherub faces and spouts, a hidden charm, Transformed by ivy’s organic disarm.',

    'Droplets linger, on leaves they cling, Liquid jewels in the embrace of spring.',

    'Earth’s scent and blooms in the air, A story woven, in this ivy-covered lair.',

    'In morning’s light, time wakes with hues so fair, A river’s flow, relentless in its care. Each second ticks, a heartbeat’s rhythmic song, As shadows dance, elongated and strong.',

    'Midday arrives, a force both bright and clear, Sharp seconds etch themselves, crystal and sheer. Afternoon softens, with a golden grace, As shadows lengthen in the day’s embrace.',

    'Sunset, a masterpiece in fiery art, The world holds its breath, time plays its part. The night unfolds, a silent, starry sea, Moon marks the hours in celestial glee.',

    'In the recesses of the mind, a river of thought does wind, Consciousness, a liquid flow, elusive, profound, undefined.',

    'Like water it slips through reason’s cracks, Pooling in shadows, where introspection tracks.',

    'Subconscious depths, an abyssal sea, Emotions stir, a tempest in me.',

    'Adapting, molding, to perception’s form, A torrent of ideas, a cerebral storm.',

    'Moonlit chambers of contemplation’s grace, Reflecting dreams in consciousness’ embrace.',

    'Chiaroscuro emotions, a palette divine, Painting the canvas with joy and sorrow entwined, Oh, haunted corridors, where regrets softly tread, Echoes of bygone whispers, where the soul is led.',

    'In the alchemy of time, where patience meets persistence, Stone succumbs to the subtle art of erosion’s insistence. A dance between elements, a slow and silent fray, As nature, with gentle hands, sculpts in a patient ballet.',

    'Raindrops, like celestial artisans, descend from the sky, Their touch, a delicate caress, as they gracefully fly. Each drop a sculptor’s chisel, a messenger of change, Wearing away the stone, in a rhythm both quiet and strange.',

    'Wind, a sculptor of whispers, whispers through the ages, Carrying grains of time, as it weaves through rock’s pages. A soft abrasion, a tender kiss, as it carries the weight, Eroding the surface, shaping destiny’s silent fate.',

    'Time, the master craftsman, with its relentless stride, Leaves no stone untouched, no fortress to hide. A slow metamorphosis, as centuries pass by, From rugged rock to grains of sand, under the vast sky.',
    
    'Does the spirit linger in the stony cocoon, A prisoner of the earth, under the spectral moon? Or does it transcend the confines of the mineral shell, To wander the ethereal realms, a ghostly farewell?',

    'No longer the vessel of mortal desires and whims, But a statue, frozen in time, where the arcane hymns Of an unseen choir sing a dirge for the animate, As the soul grapples with its stone-carved fate.',

    'The essence within, once a flame of life’s fire, Now imprisoned, encased in a mineral attire. In the stillness of petrification, a silent scream, The soul’s lament echoes through an otherworldly dream.',

    'In the pallid grip of an otherworldly enchantment, The soul, a captive bird in a stone-wrought confinement. As the body morphs to cold and unyielding rock, A metamorphosis profound, in the realm of the arcane clock.',

    'The NYMPH possessed a secret longing that transcended its stony form. It harbored a fervent desire to shed the rigid confines of its sculpted existence and taste the ephemeral essence of humanity, again.',

    'One fateful night, as the silver moon hung low in the sky, a mysterious enchantment descended upon the garden. A spectral mist, ethereal and enticing, beckoned the NYMPH to life. With a tremor that resonated through its cold form, the statue awoke to the haunting melody of the garden’s nocturnal symphony once more.',

    'In the first mirror, it saw glimpses of the vibrant tapestry of joy and sorrow. The statue, captivated by the emotions, pressed on to the next reflective surface. In the second mirror, it witnessed chaos, where life pulsed with the rhythm of existence.',

    'The garden of mirrors unfolded like an ever-shifting labyrinth, each reflection revealing a facet of the human experience. The statue moved through scenes of love and loss, laughter and tears, until it stood before a mirror that held the reflection of a living, breathing person—an image so tantalizingly close yet agonizingly distant.',

    'With a determined heart, the NYMPH stepped into mirror after mirror, and the world around it dissolved. As it emerged on the other side, the stone yielded to flesh, and the statue transformed into a being of warmth and life... but it was just an illusion.',

    'In the realm of stone, where time takes its toll, Weathering whispers, as freeze and thaw unroll.',

    'Erosion dances with wind and rain’s embrace, Carving tales on surfaces, leaving its trace.',

    'Microbial forces, lichens, and moss, Biological rhythms, a subtle, silent gloss.',

    'Pollution’s acidic breath, a corrosive kiss, Stone weathers under its chemical abyss.',

    'Salt-laden breezes from the ocean’s spray,Crystallizing within, a slow decay.',

    'Abrasion marks the passage of countless feet, A dance of erosion on pathways and street.',

    'In the furnace of fire, stones may crack, Thermal shocks, a searing attack.',

    'Chemicals wield their transformative might, Dissolving, altering, in the silent night.',

    'Maintenance neglected, a crucial art, Accumulated neglect, a corrosive start.',

    'Subsurface secrets, geological song, Influencing stability, lasting or prolonged.',

    'Preservation’s dance, a delicate chore, Guarding the stones, forevermore.',
    
    'The statue’s silhouette captures a dynamic stillness, a moment suspended in time where movement and serenity coalesce. Shadows play upon the contours, accentuating the depth and texture of the marble, while the interplay of light creates a nuanced chiaroscuro that brings the figure to life.'
  ]

  traverse(){

    if(this.textArray.length <= 0){
      this.textSource = 'FADE OUT.'
      this.imageSource = 'assets/about.png';
      this.buttonSource = ''
    }else{
      let randomText = Math.floor(Math.random() * this.textArray.length);
      let newText = this.textArray[randomText];
      this.textArray.splice(randomText, 1);
  
      let valid = false;
      let randomButton = 0;
      while(!valid){
        randomButton = Math.floor(Math.random() * newText.split(' ').length);
        if(newText.split(' ')[randomButton].length > 3){
          valid = true;
        }
      }
      
      this.buttonSource = newText.split(' ')[randomButton].toUpperCase();
  
      let randomImage = Math.floor(Math.random() * this.imageArray.length);
      let newImage = this.imageArray[randomImage];
      this.imageArray.splice(randomImage, 1);
      
      this.textSource = newText;
      this.imageSource = newImage;

      document.body.scrollTop = document.documentElement.scrollTop = 0;

      let store = {
        images: this.imageArray,
        text: this.textArray
      }

      localStorage.setItem('garden-of-mirrors', JSON.stringify(store));

      console.log('textArray', this.textArray.length);
      console.log('imageArray', this.imageArray.length);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('category-nav');
    const appsGrid = document.getElementById('apps-grid');

    // サンプルデータ
    const sampleApps = [
        { title: '漢字ビジョントレーニング', category: 'かんいち', imageUrl: 'images/kanji_vision_traning.png', appUrl: 'https://tagiiii.github.io/kanji_vision_training_app/' },
        { title: '漢字部首クイズ', category: 'かんいち', imageUrl: 'images/kanji_radical_quiz.png', appUrl: 'https://tagiiii.github.io/kanji_radical_quiz_app/' },
        { title: '難読漢字クイズ', category: 'かんいち', imageUrl: 'images/nandoku_kanji_quiz.png', appUrl: 'https://tagiiii.github.io/nandokukanji_app/' },
        { title: 'トークテーマカード', category: 'アイスブレイク', imageUrl: 'images/talktheme.png', appUrl: 'https://tagiiii.github.io/talktheme_app/' },
        { title: 'バリューファインダー', category: '自分について知る', imageUrl: 'images/value_finder.png', appUrl: 'https://tagiiii.github.io/value_finder/' },
        { title: 'ポテンシャル発掘診断', category: '自分について知る', imageUrl: 'images/potential.png', appUrl: 'https://tobitate-mext.jasso.go.jp/potential/' },
        { title: 'NHK for School', category: '学び', imageUrl: 'images/nhkforschool.png', appUrl: 'https://www.nhk.or.jp/school/' },
        { title: '動物図鑑', category: '学び', imageUrl: 'images/animalcatalog.png', appUrl: 'https://www.city.asahikawa.hokkaido.jp/asahiyamazoo/zuroku/index.html' },
        { title: 'e-board', category: '学び', imageUrl: 'images/e-board.png', appUrl: 'https://www.eboard.jp/dashboard/' },
        { title: '人狼GMサポート', category: 'ボードゲーム', imageUrl: 'images/werewolf_game_support.png', appUrl: 'https://tagiiii.github.io/werewolf_game_support/' },
        { title: '2択質問ゲーム', category: 'アイスブレイク', imageUrl: 'images/multiple_choice_game.png', appUrl: 'https://tagiiii.github.io/multiple_choice_game/' },
        { title: 'トークすごろく', category: 'アイスブレイク', imageUrl: 'images/talksugoroku.png', appUrl: 'https://tagiiii.github.io/talksugoroku/' },
        { title: 'ワードウルフGMサポート', category: 'ボードゲーム', imageUrl: 'images/word_wolf.png', appUrl: 'https://tagiiii.github.io/word_wolf/' },
        { title: '名前変えゲームGMサポート', category: 'ボードゲーム', imageUrl: 'images/name_change_game.png', appUrl: 'https://tagiiii.github.io/name_change_game/' },
        { title: '性格×進路ガイド', category: '進路サポート', imageUrl: 'images/personality_and_career_path_guide.png', appUrl: 'https://tagiiii.github.io/personality_and_career_path_guide/' },
        { title: 'インサイダーゲームGMサポート', category: 'ボードゲーム', imageUrl: 'images/insider_game.png', appUrl: 'https://tagiiii.github.io/insider_game/' },
        { title: 'ジェスチャーゲームGMサポート', category: 'ボードゲーム', imageUrl: 'images/gesture_game.png', appUrl: 'https://tagiiii.github.io/gesture_game/' },
        { title: 'お題当てゲームGMサポート', category: 'ボードゲーム', imageUrl: 'images/guess_the_word_game.png', appUrl: 'https://tagiiii.github.io/guess_the_word_game/' },
        { title: 'だいたいこのくらいゲーム！', category: 'アイスブレイク', imageUrl: 'images/about_this_much_game.png', appUrl: 'https://tagiiii.github.io/about_this_much_game/' },
        { title: 'どっちがホントゲーム！', category: 'アイスブレイク', imageUrl: 'images/which_is_true.png', appUrl: 'https://tagiiii.github.io/which_is_true/' }
    ];

    /**
     * カテゴリーナビゲーションを生成・表示する
     */
    function renderCategories() {
        // カテゴリーのユニークなリストを作成（「すべて」を追加）
        const categories = ['すべて', ...new Set(sampleApps.map(app => app.category))];
        
        categoryNav.innerHTML = categories.map(category => 
            `<button class="category-tab" data-category="${category}">${category}</button>`
        ).join('');

        const categoryTabs = document.querySelectorAll('.category-tab');

        // 各タブにクリックイベントを設定
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // すべてのタブからactiveクラスを削除
                categoryTabs.forEach(t => t.classList.remove('active'));
                // クリックされたタブにactiveクラスを追加
                tab.classList.add('active');

                const selectedCategory = tab.dataset.category;
                const filteredApps = selectedCategory === 'すべて'
                    ? sampleApps
                    : sampleApps.filter(app => app.category === selectedCategory);
                
                renderApps(filteredApps);
            });
        });

        // 初期状態で「すべて」タブをアクティブにする
        if (categoryTabs.length > 0) {
            categoryTabs[0].classList.add('active');
        }
    }

    /**
     * アプリの配列を受け取り、画面にカードを表示する
     * @param {Array} apps 表示するアプリの配列
     */
    function renderApps(apps) {
        appsGrid.innerHTML = ''; // 既存のカードをクリア
        apps.forEach(app => {
            const card = document.createElement('a');
            card.href = app.appUrl;
            card.target = '_blank';
            card.className = 'app-card';

            card.innerHTML = `
                <img src="${app.imageUrl}" alt="${app.title}">
                <div class="card-content">
                    <p>${app.title}</p>
                </div>
            `;
            appsGrid.appendChild(card);
        });
    }

    // 初期化処理
    renderCategories();
    renderApps(sampleApps); // 最初はすべてのアプリを表示
});

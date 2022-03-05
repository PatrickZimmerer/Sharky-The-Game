const level1 = new Level(
    [    
    new Enemy(),
    new Enemy(),
    new Enemy(),    
    new Enemy(),
    new Enemy(),
    new Enemy(),    
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Endboss()
    ],
    [
    new Light(),
    new Light(),
    new Light(),
    new Light()
    ],
    [
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', -1440),        
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', -1440),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', -1440),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', -720),
        
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 0),        
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 0),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 720),        
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 720),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 720),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png', 720*2),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D1.png', 720*2),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png', 720*2),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png', 720*3),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/D2.png', 720*3),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png', 720*3),
        
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
    [
        new Heart(),
        new Heart(),
        new Heart()
    ]
    );

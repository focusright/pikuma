build:
	clang -std=c99 ./src/main.c -o renderer.exe -L %SDL2_LIBRARY% -I %SDL2_INCLUDE_DIR% -lShell32 -lSDL2main -lSDL2 -Wno-narrowing -Xlinker /subsystem:console

run:
	./renderer

clean:
	rm renderer

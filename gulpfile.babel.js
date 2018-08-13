import gulp from "gulp";
import fs from "fs";
import Console from "console";
import * as rxjs from "rxjs";
import { skipWhile, takeWhile, map, filter } from "rxjs/operators";

gulp.task("generate-stub", done => {
    const ids = fs.readFileSync("ext/IDS.txt", { encoding: "utf8" }).split(/\r\n|\n|\r/);
    const outputPath = "stub/Strokes.txt";

    Console.log("Creating stub file");
    fs.writeFileSync(outputPath, "", { flag: "w" });

    Console.log("Generating stub");
    rxjs.concat(
        rxjs.from(ids).pipe(
            skipWhile(x => !x.startsWith("#\t{01}")),
            takeWhile(x => x.startsWith("#\t{")),
            map(x => /(?<placeholder>\{[0-9]+\})/.exec(x).groups.placeholder),
            map(x => x + "," + x + ",,," + "\r\n")
        ),
        rxjs.from(ids).pipe(
            skipWhile(x => x.startsWith("#")),
            takeWhile(x => !x.startsWith("#")),
            map(x => x.split(/\t/)),
            map(x => ({ codepoint: x[0], literal: x[1], patterns: x.slice(2, x.length) })),
            filter(x => x.patterns.every(y => y === "^" + x.literal + "$")),
            map(x => x.codepoint + "," + x.literal + ",,," + "\r\n")
        )
    ).subscribe(
        x =>
            fs.writeFileSync(outputPath, x, {
                encoding: "utf8",
                flag: "as"
            }),
        x => Console.error(x),
        () => done()
    );
});

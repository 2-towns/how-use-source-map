import { RawSourceMap, SourceMapConsumer } from 'source-map';

class SourceMapperClass {
    async rawLog(stack: string, rawSourceMap: RawSourceMap) {
        if (!stack.split) {
            console.info("[SOURCEMAP] No split function")
            return stack
        }

        // Get every lines
        const elements = stack.split('\n');
        if (elements.length === 1) {
            return elements[0];
        }

        const [initial, ...parts] = elements;

        let error = `${initial}\n`;

        // For each part, let's extract line and column and pass to SourceMapConsumer
        for (const part of parts) {
            const split = part.split(':');
            const l = split.length;

            const column = split[l - 1].replace(')', '');
            const line = split[l - 2];
            
            await SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
                const s = consumer.originalPositionFor({
                    line: parseInt(line, 10),
                    column: parseInt(column, 10),
                });
                if (s.source) {
                    error += `${s.source}, at ${s.line}:${s.column}\n`
                } else {
                    error += `${part}\n`
                }
            });
        }

        return error;
    }
}

export const SourceMapper = new SourceMapperClass();
package schultz.dustin.io.services;

import com.madgag.gif.fmsware.AnimatedGifEncoder;
import org.springframework.stereotype.Service;

import java.nio.file.Path;

@Service
public class GifEncoderService {

    public AnimatedGifEncoder getGifEncoder(boolean repeat, float frameRate, Path
            output) {
        AnimatedGifEncoder gifEncoder = new AnimatedGifEncoder();

        if (repeat) {
            gifEncoder.setRepeat(0);
        }

        gifEncoder.setFrameRate(frameRate);
        gifEncoder.start(output.toString());
        return gifEncoder;
    }
}

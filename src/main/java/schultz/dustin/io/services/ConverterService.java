package schultz.dustin.io.services;

import com.madgag.gif.fmsware.AnimatedGifEncoder;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.FrameGrabber;
import org.bytedeco.javacv.Java2DFrameConverter;
import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;

@Service
public class ConverterService {

    public void toAnimatedGif(FFmpegFrameGrabber frameGrabber, AnimatedGifEncoder
            gifEncoder, int start, int end, int speed) throws FrameGrabber.Exception {
        long startFrame = Math.round(start * frameGrabber.getFrameRate());
        long endFrame = Math.round(end * frameGrabber.getFrameRate());

        Java2DFrameConverter frameConverter = new Java2DFrameConverter();

        for (long i = startFrame; i < endFrame; i++) {

            if (i % speed == 0) {

                // Bug if frameNumber is set to 0
                if (i > 0) {
                    frameGrabber.setFrameNumber((int) i);
                }

                BufferedImage bufferedImage = frameConverter
                        .convert(frameGrabber.grabImage());
                gifEncoder.addFrame(bufferedImage);
            }

        }

        frameGrabber.stop();
        gifEncoder.finish();
    }
}

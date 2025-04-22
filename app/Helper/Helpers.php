<?php
namespace App\Helper;

use Illuminate\Support\Facades\File;

class Helpers {


    public static function uploadDocument($path, $file, $exist_path = null)
    {
        $imageFileType = [
            'JPG',
            'PNG',
            'GIF',
            'BMP',
            'WebP',
            'JPEG'
        ];
        $extention = $file->getClientOriginalExtension();
        $upload_path = public_path($path);

        //delete old file
        if (File::exists($exist_path)) {
            File::delete($exist_path);
        }

        //folder create
        if (!file_exists($upload_path)) {
            mkdir($upload_path, 0777, true);
        }
        $name = microtime() . '_' . $file->getClientOriginalName();
        // space remove in file name
        $filename = preg_replace("/\s+/", "", $name);
        // save to server
        // if (in_array($extention, $imageFileType)) {
        //     $img = Image::make($file)
        //         ->resize(800, null, function ($constraint) {
        //             $constraint->aspectRatio();
        //         })
        //         ->save($upload_path . '/' . $filename);
        // } else {
            $file->move($upload_path, $filename);
        // }

        return [
            'filePath' => $path . $filename,
            'fileFullPath' => url($path . $filename)
        ];
    }
}
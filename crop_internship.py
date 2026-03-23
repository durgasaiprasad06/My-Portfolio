from PIL import Image
import sys
import os

def crop_cert(input_path, output_path, crop_box):
    try:
        with Image.open(input_path) as img:
            print(f"Original {input_path}: {img.size}")
            # crop_box: (left, top, right, bottom)
            cropped = img.crop(crop_box)
            cropped.save(output_path)
            print(f"Saved cropped to {output_path}: {cropped.size}")
    except Exception as e:
        print(f"Error {input_path}: {e}")

if __name__ == "__main__":
    # Based on the screenshot, the certificate is centered and quite large.
    # Dimensions: 1920x970
    # Top UI bar is ~105px, bottom UI bar is negligible in this view.
    # Thumbnails are NOT visible in this specific screenshot.
    # It has a thick dark margin.
    
    # Bounding box for the white portion:
    # Left: ~480, Top: ~105, Right: ~1440, Bottom: ~810 (approx)
    
    # I'll use a more surgical crop based on the image content.
    input_file = "C:\\Users\\mohan\\.gemini\\antigravity\\brain\\cc8cdde5-54cb-46c4-be92-e8dc8d6482e7\\cert_internship_raw_1773610519257.png"
    output_file = "e:\\Sai-Portfolio\\public\\assets\\certs\\cert_internship.png"
    
    # Adjusted crop box for this specific 1920x970 image:
    # The certificate is an A4-style landscape.
    left = 475 
    top = 100
    right = 1445
    bottom = 815
    
    crop_cert(input_file, output_file, (left, top, right, bottom))
    
    # Also updating previous ones if needed, but they are already done.

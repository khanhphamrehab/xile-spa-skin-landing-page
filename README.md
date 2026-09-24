# Xile Beauty Spa — GitHub Pages

Bản đã duyệt: chăm sóc da, nền dòng chảy cinematic, logo trắng trên nền nâu, 17 dịch vụ.

## Đưa lên GitHub
1. Giải nén ZIP. Tạo repository mới, ví dụ `xile-cham-soc-da`, nhánh `main`.
2. Đưa TOÀN BỘ nội dung đã giải nén vào gốc repository: `package.json`, `app/`, `components/`, `public/`, `.github/`… Không đặt thêm thư mục bao ngoài và không upload nguyên file ZIP.
3. Nhớ đưa cả `.github/workflows/deploy.yml` lên. Nếu giao diện upload bỏ qua thư mục bắt đầu bằng dấu chấm, dùng GitHub Desktop hoặc tạo file đúng đường dẫn này bằng Add file → Create new file, rồi dán nội dung file workflow.
4. Vào Settings → Pages → Build and deployment → Source → GitHub Actions.
5. Vào Actions → Deploy Xile to GitHub Pages → Run workflow, chọn `main`. Những lần push lên `main` sau đó sẽ tự build và deploy.
6. Khi workflow thành công, mở đường dẫn hiển thị trong Settings → Pages hoặc deployment `github-pages`.

Workflow đã có lint, build và deploy. Nó đọc đường dẫn Pages để cấu hình ảnh, font, nền, tài nguyên và canonical SEO. Dùng repository công khai nếu gói GitHub của bạn không hỗ trợ Pages cho repository riêng tư.

## Cấu trúc
- `app/`: nội dung, giá, giao diện, metadata và đường dẫn tài nguyên
- `components/`: bảng giá và form
- `public/`: ảnh, logo, favicon
- `.github/workflows/deploy.yml`: tự động build và triển khai
- `package.json` + `package-lock.json`: dependencies và lệnh chạy
- `next.config.ts`: xuất website tĩnh, hỗ trợ đường dẫn repository
- `.env.example`: mẫu cấu hình

Không chứa node_modules, .git, thông tin đăng nhập hoặc ID dự án Sites.

## Tên miền riêng
Thêm Custom domain trong Settings → Pages và trỏ DNS đúng hướng dẫn GitHub. Sau khi lưu tên miền, chạy lại workflow để cập nhật đường dẫn và canonical; bật Enforce HTTPS khi khả dụng. Không cần tự sửa tên repository trong mã nguồn.

## Chạy trên máy
Cài Node.js 22. Chạy `npm ci`, `npm run dev`.
Kiểm tra: `npm run lint` và `npm run build`.
Bản tĩnh nằm trong `out/`. Không cần commit `out/`; workflow tự tạo.

## Form
Form hiện xác thực thông tin rồi soạn tin nhắn cho khách sao chép gửi Facebook, chưa tự xác nhận lịch. Để tự nhận yêu cầu, thêm repository variable NEXT_PUBLIC_BOOKING_API_URL tại Settings → Secrets and variables → Actions → Variables và chạy lại workflow. API cần HTTPS, CORS đúng domain, validation phía server và chống spam. Biến NEXT_PUBLIC_* không được chứa khóa bí mật.

## Kiểm thử gói xuất
Đã kiểm tra build dưới đường dẫn repository mẫu `/xile-cham-soc-da`, bao gồm tham chiếu ảnh, nền và font. Workflow chưa chạy trên tài khoản GitHub của bạn; cần hoàn thành cấu hình Pages ở trên.

Hướng dẫn chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

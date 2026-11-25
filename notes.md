# Build record — Famous Last Words: The Funniest Epitaph

- Competition: u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406 ($2, 2 chỗ, $1 mỗi chỗ; hạn Thu 26/11/2026 12:55 PM UTC = 19:55 VN)
- Yêu cầu: famous last words hài nhất dưới dạng một epitaph trên bia mộ, MỘT dòng, tối đa 150 ký tự, lưu vào /output/entry.txt. Judge chấm theo cặp: đúng epitaph một dòng, thật sự buồn cười, có yếu tố bất ngờ, đọc như khắc trên đá, đáng nhớ.
- Entry đã chọn (93 ký tự, 1 dòng, không newline cuối): xem `entry.txt`.
- Lý do chọn: mở đầu "Here lies…" đúng khuôn epitaph khắc đá; "speak to the manager" là meme ai cũng nhận ra ngay; twist "upstairs" (thiên đường) + "finally got an appointment" là cú bất ngờ ở cuối câu — bà Karen cuối cùng cũng được gặp "quản lý tối cao". Ngắn, dễ nhớ, đọc to lên vẫn buồn cười với người chưa biết gì về nhân vật.

## Các phương án dự phòng

1. (88 ký tự) "Here lies Dave. He finally read the terms and conditions — it took the rest of his life."
   — Hài kiểu "đọc điều khoản", twist khá nhưng punchline đoán được sớm hơn, ít bất ngờ hơn câu Karen.
2. (86 ký tự) "Here lies Bob. His last words were 'Watch this' — nobody did, but the stone remembers."
   — "Watch this" là câu last-words kinh điển, "the stone remembers" thơ và hợp bia mộ, nhưng ít cười bật ra hơn câu Karen.

## Kiểm tra
- Đếm ký tự chính xác, chỉ 1 dòng, không ký tự thừa, đúng chủ đề epitaph: ĐẠT — 93 ký tự (giới hạn 150), 95 bytes, 1 dòng, không newline cuối, không CR; `node main.ts` chạy thành công, /output/entry.txt byte-identical với entry.txt.
- LƯU Ý theo skill makefun_bounty_submission: bản này là BẢN NHÁP do coordinator chuẩn bị. Trước khi nộp, phiên chính phải viết lại entry trong recorded session (chạy `main.ts` trong session đó) rồi mới submit — không nộp từ bản nháp này.

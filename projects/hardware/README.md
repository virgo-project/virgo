# Virgo Hardware
NB: This document is still being revised and you're invited to revise it with us!

### Why Build Open Hardware?

Open hardware is an important next step for the Open Source / Open Culture movement, and an important next step towards free, open societies.  

With the advent of Open Source software, it's possible for individuals around the world to collaborate on complex, critical software systems that evolve rapidly and provide huge benefits to society at large.
The security of Open Source software can be verified.  Students and enthusiasts can examine the source code and gain an understanding of how the software works.

Generally speaking, the same is not true of hardware.  Most hardware components are entirely closed source, and many don't even have open source drivers.  

Moreover, the majority of today's consumer devices (mobile phones, tablets) are locked down.  Users aren't free to install the software that they'd like.  App Store exclusion/removal is used as a means of censoring
"undersirable" apps. Often, software and security updates aren't even provided by manufacturers.  This means users end up insecure and devices need to be replaced before the hardware has gone bad.

Most likely, you carry a computer in your pocket all day-- and you don't know what it's doing or who it's talking to.

And you can't check.  

Users own their devices, but cannot control them, cannot learn from and understand them, and cannot contribute to their improvement.  Devices are designed to be replaced instead of repaired.
Security is based on trust in the companies that made the devices or the software on them, instead of being verifiable.  

So, piece by piece, step by step, board by board, manufacturer by manufacturer, we're going to design and build Open Source hardware.

We're doing this because:

* Everyone deserves privacy
* Everyone should be able to know what their devices are doing
* Everyone should be able to learn about technology
* Everyone should be able to contribute to the advancement of technology on all levels

And we'd love your help with this, and to help you with it, as well.  



### Products

All of our products will be 100% open source.  Open cores, open PCB Layout, open BOM.
Since the design will be publicly available, any manufacturer with the right equipment should be able to build these.

*HSM*
A hardware security module with a RISC-V processor. 

Collaborating with https://keystone-enclave.org/ on ideal design

*Calculator*
A product that approximates the functionality of a TI-83 calculator

*Module*
A compute module in the same form factor as laptop RAM or laptop GPUs (SO-DIMM or MXM-3).  

Initally, these will be targeted for use as single board computers, servers, or embedded compute systems.  Because they're small, these devices can replace potentially insecure virtual machines.
They also target servers at first because there isn't currently an open source GPU.  

Later, once we've got an Open Source GPU, these modules can be used in:

* Tablets
* Laptops
* TVs

....and likely many more things, as well


*Phone*
A Open Source mobile phone will happen!

All of the above products are steps towards a phone.  The phone is the computer most people use most often.

Here's a little of what that will take:

* Open Cellular Baseband
* Open Cellular Networks
* Open GPU
* Open Camera
* Open Camera flash/flashlight

This product will let everyone have a well-understood, community-designed, modular computer in their pocket.  


### Tracking

* Call with Dawn Song 1/20/2020
* Contact Steven Zhao from Orange Pi 1/27/2020
  * will follow up more after holidays
* E-mail SiFive 1/27/2020


### Hardware Of Interest

[Bumblebee GD32VF103](https://www.gigadevice.com/products/microcontrollers/gd32/risc-v/) - need to determine if contains proprietary IP or not

[SiFive HiFive Unleashed](https://www.sifive.com/boards/hifive-unleashed) - [No longer being produced](https://forums.sifive.com/t/any-hifive-unleashed-for-sale/3218)  Will be replaced with another product. Open source CPU, board design and manufacturing process.  Need to double-check that there's no proprietary IP in the u54 core.  

[SiFive u54](https://sifive.cdn.prismic.io/sifive/8fdaed59-7bb6-445c-9d07-a60aab997cbe_sifive_coreip_U54_AXI4_rtl_v19_08p2p0_release_manual.pdf)

[PinePhone](https://www.pine64.org/pinephone/) - proprietary CPU/GPU/baseband, open operating system.  Don't know the state of drivers yet. 

[Purism Librem 5](https://puri.sm/products/librem-5/) - proprietary CPU/GPU/baseband, open operating system.  Don't know the state of drivers yet. 






### To Contact

* SiFive
* Open Source Ecology
* Khadas
* OrangePi
* Raspberry Pi Foundation
* Pinet64
